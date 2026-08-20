"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { sendContactMessage } from "@/lib/contact";

/**
 * Contact form UI. Fields are generated from the `inputs` config and the
 * delivery is handled by `sendContactMessage` (src/lib/contact.ts), which
 * posts to Web3Forms so messages arrive directly in the inbox - no email
 * client and no backend needed.
 */
type Status = "idle" | "sending" | "sent" | "error";

type FieldConfig = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
};

const inputs: FieldConfig[] = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
  { id: "email", label: "Email", type: "email", placeholder: "you@institution.edu", required: true },
  { id: "subject", label: "Subject", type: "text", placeholder: "Reason for contact", required: false },
];

const fieldClass =
  "focus-ring w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 hover:border-cyan/40 focus:border-cyan";

function TextField({ field }: { field: FieldConfig }) {
  return (
    <div>
      <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-foreground">
        {field.label}
      </label>
      <input
        id={field.id}
        name={field.id}
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
        className={fieldClass}
      />
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Auto-dismiss the toast a few seconds after success or error.
  useEffect(() => {
    if (status === "sent" || status === "error") {
      const id = window.setTimeout(() => setStatus("idle"), 6000);
      return () => window.clearTimeout(id);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const node = e.currentTarget;
    setStatus("sending");
    try {
      const ok = await sendContactMessage(new FormData(node));
      if (ok) {
        setStatus("sent");
        node.reset(); // auto-clear after a successful send
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";
  const [first, second, third] = inputs;

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot: hidden field bots fill in and humans never see. */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <TextField field={first} />
          <TextField field={second} />
        </div>
        <TextField field={third} />

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${fieldClass} resize-none`}
            placeholder="Tell me a little about your enquiry…"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="btn-shift focus-ring group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
          {sending ? "Sending…" : "Send message"}
        </button>
      </form>

      {/* Toast notifications */}
      <AnimatePresence>
        {status === "sent" && (
          <motion.div
            key="toast-success"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            aria-live="polite"
            className="mt-4 flex items-center gap-3 rounded-xl border border-emerald/30 bg-emerald/10 px-4 py-3 text-sm text-foreground"
          >
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 16 }}
              className="text-emerald"
            >
              <CheckCircle2 className="h-5 w-5" />
            </motion.span>
            <span>
              <strong className="font-semibold text-emerald">Message sent.</strong>{" "}
              Thank you - I&apos;ll get back to you soon.
            </span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="toast-error"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="alert"
            aria-live="assertive"
            className="mt-4 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-foreground"
          >
            <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
            <span>
              Something went wrong. Please email me directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium underline">
                {siteConfig.email}
              </a>
              .
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
