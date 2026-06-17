"use client";

import { useState } from "react";
import Link from "next/link";
import { contact as contactContent } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          organisation: data.get("organisation"),
          email: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="surface-card-elevated rounded-2xl border-t-4 border-t-olive/80 p-10 text-center">
        <p className="font-serif text-2xl text-text-primary">Thank you.</p>
        <p className="mt-3 text-text-secondary">
          Your enquiry has been sent. A confirmation email is on its way to you, and our team will
          respond within 2 business days.
        </p>
        <p className="mt-4 font-mono text-xs text-text-secondary">
          If you do not receive a confirmation, contact us at {contactContent.email}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="surface-card-elevated rounded-2xl border-t-4 border-t-persian-orange/80 p-6 lg:p-8"
    >
      <p className="mb-5 font-mono text-xs text-text-secondary">
        Enquiries are sent to{" "}
        <a
          href={`mailto:${contactContent.email}`}
          className="text-accent-core underline-offset-4 hover:underline"
        >
          {contactContent.email}
        </a>
      </p>
      <div className="space-y-5">
        <Field label="Name" name="name" required disabled={status === "submitting"} />
        <Field label="Organisation" name="organisation" required disabled={status === "submitting"} />
        <Field label="Email" name="email" type="email" required disabled={status === "submitting"} />
        <div>
          <label
            htmlFor="interest"
            className="font-mono text-xs uppercase tracking-widest text-text-secondary"
          >
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            required
            disabled={status === "submitting"}
            className="mt-2 w-full border-b border-border-subtle bg-transparent py-2.5 text-text-primary outline-none transition-colors focus:border-accent-core disabled:opacity-60"
          >
            {contactContent.interests.map((item) => (
              <option key={item} value={item} className="bg-bg-elevated">
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="font-mono text-xs uppercase tracking-widest text-text-secondary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            disabled={status === "submitting"}
            className="mt-2 w-full resize-none border-b border-border-subtle bg-transparent py-2.5 text-text-primary outline-none transition-colors focus:border-accent-core disabled:opacity-60"
          />
        </div>
        <div className="rounded-xl border border-border-subtle/80 bg-bg-base/40 p-4">
          <label className="flex gap-3 text-sm leading-relaxed text-text-secondary">
            <input
              type="checkbox"
              name="consent"
              required
              disabled={status === "submitting"}
              className="mt-1 h-4 w-4 rounded border-border-subtle accent-emerald"
            />
            <span>
              By submitting this enquiry, I confirm that I have read and understood the{" "}
              <Link
                href="/privacy-policy"
                className="text-accent-core underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and consent to the processing of my personal data for the purpose of responding to
              my enquiry.
            </span>
          </label>
        </div>
      </div>
      {status === "error" && errorMessage ? (
        <p className="mt-4 text-sm text-accent-pe" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-accent-core py-3 text-sm font-medium text-off-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-widest text-text-secondary"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        className="mt-2 w-full border-b border-border-subtle bg-transparent py-2.5 text-text-primary outline-none transition-colors focus:border-accent-core disabled:opacity-60"
      />
    </div>
  );
}
