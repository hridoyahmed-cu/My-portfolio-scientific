"""Minimal ABIF (.ab1) reader — pure stdlib, big-endian.

Applied Biosystems ABIF spec: 4-byte magic "ABIF", 2-byte version, then a
28-byte root directory entry whose dataoffset points at the directory array.
Each directory entry is 28 bytes: name[4], number(i), elemtype(h), elemsize(h),
numelems(i), datasize(i), dataoffset(i), datahandle(i). When datasize <= 4 the
payload is stored inline in the dataoffset field itself.
"""
import struct

ELEM = {
    1: ("B", 1),   # byte
    2: ("c", 1),   # char
    3: ("H", 2),   # word
    4: ("h", 2),   # short
    5: ("i", 4),   # long
    7: ("f", 4),   # float
    8: ("d", 8),   # double
}


class ABIF:
    def __init__(self, path):
        with open(path, "rb") as fh:
            self.raw = fh.read()
        if self.raw[:4] != b"ABIF":
            raise ValueError(f"not an ABIF file: {path}")
        self.version = struct.unpack(">h", self.raw[4:6])[0]
        # Root directory entry lives at offset 6.
        name, num, etype, esize, nelem, dsize, doff, _ = self._entry(6)
        self.tags = {}
        for i in range(nelem):
            e = self._entry(doff + i * 28)
            self.tags[(e[0], e[1])] = e

    def _entry(self, off):
        name, num, etype, esize, nelem, dsize, doff, dhandle = struct.unpack(
            ">4sihhiiii", self.raw[off:off + 28]
        )
        return name.decode("ascii"), num, etype, esize, nelem, dsize, doff, dhandle

    def get(self, name, num=1):
        key = (name, num)
        if key not in self.tags:
            return None
        _, _, etype, esize, nelem, dsize, doff, _ = self.tags[key]
        # Payloads of 4 bytes or fewer are inlined in the offset field.
        if dsize <= 4:
            blob = struct.pack(">i", doff)[:dsize]
        else:
            blob = self.raw[doff:doff + dsize]

        if etype in (18, 19):  # pString / cString
            return blob[1:].decode("latin-1") if etype == 18 else blob[:-1].decode("latin-1")
        if etype == 2:  # char array -> str
            return blob.decode("latin-1")
        if etype in ELEM:
            fmt, width = ELEM[etype]
            n = dsize // width
            return list(struct.unpack(f">{n}{fmt}", blob[: n * width]))
        return blob


def read(path):
    """Return the fields needed to draw a chromatogram and a QC trace."""
    a = ABIF(path)
    order = a.get("FWO_") or "GATC"           # channel -> base mapping
    traces = {}
    for i, base in enumerate(order):
        traces[base] = a.get("DATA", 9 + i)
    seq = a.get("PBAS", 2) or a.get("PBAS", 1) or ""
    qual = a.get("PCON", 2) or a.get("PCON", 1) or []
    if isinstance(qual, str):
        qual = [ord(c) for c in qual]
    loc = a.get("PLOC", 2) or a.get("PLOC", 1) or []
    return {
        "order": order,
        "traces": traces,
        "seq": seq,
        "qual": list(qual),
        "loc": list(loc),
        "sample": a.get("SMPL", 1),
        "model": a.get("MODL", 1),
        "dye": a.get("DySN", 1),
        "rundate": a.get("RUND", 1),
        "machine": a.get("MCHN", 1),
    }
