"use client";

import { useState } from "react";
import { contact as contactContent } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const organisation = String(data.get("organisation") ?? "");
    const email = String(data.get("email") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `Alyssum Labs enquiry — ${interest}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nArea of interest: ${interest}\n\n${message}`,
    );

    window.location.href = `mailto:${contactContent.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-ls/30 bg-bg-elevated p-10 text-center">
        <p className="font-serif text-2xl text-text-primary">Thank you.</p>
        <p className="mt-3 text-text-secondary">
          Your email client should open with your enquiry addressed to{" "}
          <a
            href={`mailto:${contactContent.email}`}
            className="text-accent-core underline-offset-4 hover:underline"
          >
            {contactContent.email}
          </a>
          . Send the message to complete your enquiry.
        </p>
        <p className="mt-4 font-mono text-xs text-text-secondary">
          If nothing opened, email us directly at {contactContent.email}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border-subtle bg-bg-surface p-6 lg:p-8"
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
        <Field label="Name" name="name" required />
        <Field label="Organisation" name="organisation" required />
        <Field label="Email" name="email" type="email" required />
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
            className="mt-2 w-full border-b border-border-subtle bg-transparent py-2.5 text-text-primary outline-none transition-colors focus:border-accent-core"
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
            className="mt-2 w-full resize-none border-b border-border-subtle bg-transparent py-2.5 text-text-primary outline-none transition-colors focus:border-accent-core"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-accent-core py-3 text-sm font-medium text-off-white transition-transform hover:scale-[1.01] sm:w-auto sm:px-10"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="mt-2 w-full border-b border-border-subtle bg-transparent py-2.5 text-text-primary outline-none transition-colors focus:border-accent-core"
      />
    </div>
  );
}
