import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  crews?: unknown;
  notes?: unknown;
  // Honeypot — real people leave this empty.
  website?: unknown;
};

const asString = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill hidden fields; drop them without telling them why.
  if (asString(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const email = asString(body.email, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const lead = {
    name: asString(body.name, 120),
    email,
    company: asString(body.company, 160),
    crews: asString(body.crews, 40),
    notes: asString(body.notes, 2000),
    receivedAt: new Date().toISOString(),
  };

  // TODO(launch): forward this to wherever leads should actually land —
  // a CRM, a Resend/Postmark email, a Google Sheet, a database row.
  // Until then it's logged so nothing is silently dropped in development.
  console.log("[early-access]", lead);

  return NextResponse.json({ ok: true });
}
