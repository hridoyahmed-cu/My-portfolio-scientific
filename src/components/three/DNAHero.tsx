"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Lightweight WebGL hero: a slowly rotating DNA double helix wrapped in a
 * floating particle network. Colours are read from the active theme, the loop
 * pauses when off-screen, and motion is disabled for prefers-reduced-motion.
 */
export function DNAHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // WebGL unavailable — leave the gradient backdrop in place
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 22);

    const setSize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    // ---- Theme colours -------------------------------------------------
    const readColor = (name: string, fallback: string) => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      const parts = raw.split(/\s+/);
      const value =
        parts.length >= 3 ? `hsl(${parts[0]}, ${parts[1]}, ${parts[2]})` : fallback;
      return new THREE.Color(value);
    };

    let blue = readColor("--blue", "hsl(211,68%,40%)");
    let cyan = readColor("--cyan", "hsl(190,78%,45%)");
    let emerald = readColor("--emerald", "hsl(162,76%,40%)");

    const group = new THREE.Group();
    scene.add(group);

    // ---- DNA double helix ---------------------------------------------
    const helix = new THREE.Group();
    group.add(helix);

    const steps = 44;
    const radius = 4.2;
    const verticalSpan = 26;
    const turns = 3;
    const sphereGeo = new THREE.SphereGeometry(0.32, 16, 16);
    const matA = new THREE.MeshBasicMaterial({ color: cyan });
    const matB = new THREE.MeshBasicMaterial({ color: emerald });

    const strandA = new THREE.InstancedMesh(sphereGeo, matA, steps);
    const strandB = new THREE.InstancedMesh(sphereGeo, matB, steps);
    const dummy = new THREE.Object3D();
    const rungPositions: number[] = [];

    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * verticalSpan;
      const ax = Math.cos(angle) * radius;
      const az = Math.sin(angle) * radius;
      const bx = Math.cos(angle + Math.PI) * radius;
      const bz = Math.sin(angle + Math.PI) * radius;

      dummy.position.set(ax, y, az);
      dummy.updateMatrix();
      strandA.setMatrixAt(i, dummy.matrix);

      dummy.position.set(bx, y, bz);
      dummy.updateMatrix();
      strandB.setMatrixAt(i, dummy.matrix);

      if (i % 2 === 0) {
        rungPositions.push(ax, y, az, bx, y, bz);
      }
    }
    helix.add(strandA, strandB);

    const rungGeo = new THREE.BufferGeometry();
    rungGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(rungPositions, 3),
    );
    const rungMat = new THREE.LineBasicMaterial({
      color: blue,
      transparent: true,
      opacity: 0.5,
    });
    const rungs = new THREE.LineSegments(rungGeo, rungMat);
    helix.add(rungs);

    // ---- Particle network ---------------------------------------------
    const net = new THREE.Group();
    group.add(net);

    const particleCount = 90;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < particleCount; i++) {
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 38,
          (Math.random() - 0.5) * 32,
          (Math.random() - 0.5) * 24,
        ),
      );
    }
    const pGeo = new THREE.BufferGeometry().setFromPoints(points);
    const pMat = new THREE.PointsMaterial({
      color: cyan,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
    });
    net.add(new THREE.Points(pGeo, pMat));

    // static near-neighbour links for a constellation look
    const linkPositions: number[] = [];
    const threshold = 9;
    for (let i = 0; i < points.length; i++) {
      let links = 0;
      for (let j = i + 1; j < points.length && links < 3; j++) {
        if (points[i].distanceTo(points[j]) < threshold) {
          linkPositions.push(
            points[i].x, points[i].y, points[i].z,
            points[j].x, points[j].y, points[j].z,
          );
          links++;
        }
      }
    }
    const linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linkPositions, 3),
    );
    const linkMat = new THREE.LineBasicMaterial({
      color: blue,
      transparent: true,
      opacity: 0.18,
    });
    net.add(new THREE.LineSegments(linkGeo, linkMat));

    // ---- Interaction + loop -------------------------------------------
    const pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer);

    let raf = 0;
    let visible = true;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      helix.rotation.y = elapsed * 0.28;
      net.rotation.y = elapsed * 0.05;
      net.rotation.x = elapsed * 0.02;
      group.rotation.x += (pointer.y * 0.18 - group.rotation.x) * 0.05;
      group.rotation.z += (pointer.x * 0.12 - group.rotation.z) * 0.05;
      renderer.render(scene, camera);
    };

    const animate = () => {
      render();
      raf = requestAnimationFrame(animate);
    };

    setSize();
    render();
    if (!prefersReduced) animate();

    // Pause the loop when the hero scrolls out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (prefersReduced) return;
        if (visible && !raf) {
          clock.start();
          animate();
        } else if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(mount);

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    // Update colours when the theme toggles
    const themeObserver = new MutationObserver(() => {
      blue = readColor("--blue", "hsl(211,68%,40%)");
      cyan = readColor("--cyan", "hsl(190,78%,45%)");
      emerald = readColor("--emerald", "hsl(162,76%,40%)");
      matA.color = cyan;
      matB.color = emerald;
      rungMat.color = blue;
      pMat.color = cyan;
      linkMat.color = blue;
      render();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      sphereGeo.dispose();
      rungGeo.dispose();
      pGeo.dispose();
      linkGeo.dispose();
      matA.dispose();
      matB.dispose();
      rungMat.dispose();
      pMat.dispose();
      linkMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}

export default DNAHero;
