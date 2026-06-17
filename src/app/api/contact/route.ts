import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact, site } from "@/lib/content";

const FROM_EMAIL = "noreply@alyssumlabs.com";

type ContactPayload = {
  name: string;
  organisation: string;
  email: string;
  interest: string;
  message: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const organisation = String(data.organisation ?? "").trim();
  const email = String(data.email ?? "").trim();
  const interest = String(data.interest ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !organisation || !email || !interest || !message) return null;
  if (!isValidEmail(email)) return null;
  if (!contact.interests.includes(interest as (typeof contact.interests)[number])) {
    return null;
  }

  return { name, organisation, email, interest, message };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const teamSubject = `New enquiry — ${payload.interest} — ${payload.organisation}`;
  const teamText = [
    "New enquiry from alyssumlabs.com",
    "",
    `Name: ${payload.name}`,
    `Organisation: ${payload.organisation}`,
    `Email: ${payload.email}`,
    `Area of interest: ${payload.interest}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const autoReplySubject = "We received your enquiry — Alyssum Labs";
  const autoReplyText = [
    `Dear ${payload.name},`,
    "",
    "Thank you for contacting Alyssum Labs. We have received your enquiry and a member of our team will respond within 2 business days.",
    "",
    "Your submission",
    `Organisation: ${payload.organisation}`,
    `Area of interest: ${payload.interest}`,
    "",
    `If your matter is urgent, you can reach us at ${contact.email}.`,
    "",
    site.legalName,
    site.registeredOfficeAddress[0],
  ].join("\n");

  try {
    const [teamResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: `${site.name} <${FROM_EMAIL}>`,
        to: contact.email,
        replyTo: payload.email,
        subject: teamSubject,
        text: teamText,
      }),
      resend.emails.send({
        from: `${site.name} <${FROM_EMAIL}>`,
        to: payload.email,
        replyTo: contact.email,
        subject: autoReplySubject,
        text: autoReplyText,
      }),
    ]);

    if (teamResult.error || autoReplyResult.error) {
      console.error("Resend error:", teamResult.error ?? autoReplyResult.error);
      return NextResponse.json(
        { error: "We could not send your enquiry. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
