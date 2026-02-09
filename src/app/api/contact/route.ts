import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function asOptionalString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const name = asOptionalString(payload.name);
    const email = asOptionalString(payload.email);
    const company = asOptionalString(payload.company);
    const message = asOptionalString(payload.message);

    if (!isNonEmptyString(name)) {
      return NextResponse.json({ message: 'Name is required.' }, { status: 400 });
    }

    if (!isNonEmptyString(email) || !isValidEmail(email)) {
      return NextResponse.json(
        { message: 'A valid email is required.' },
        { status: 400 },
      );
    }

    if (!isNonEmptyString(message)) {
      return NextResponse.json({ message: 'Message is required.' }, { status: 400 });
    }

    if (name.length > 120 || email.length > 320 || company.length > 160) {
      return NextResponse.json(
        { message: 'One or more fields are too long.' },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: 'Message is too long.' },
        { status: 400 },
      );
    }

    console.info('[contact] received', {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      messageLength: message.length,
    });

    return NextResponse.json({
      ok: true,
      message: 'Thanks. We received your message and will follow up shortly.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Invalid request payload.' },
      { status: 400 },
    );
  }
}
