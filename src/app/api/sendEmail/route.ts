import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type HelpOptionsPayload = Record<string, boolean>;

const HELP_OPTION_LABELS: Record<string, string> = {
  uxDesign: "UX Design",
  digitalStrategy: "Digital Strategy",
  research: "Research",
  uxAudit: "UX Audit",
  marketing: "Marketing",
  coffee: "Coffee!",
};

const formatSelectedOptions = (helpOptions: HelpOptionsPayload | undefined) => {
  const selected = Object.entries(helpOptions ?? {})
    .filter(([, isSelected]) => Boolean(isSelected))
    .map(([key]) => HELP_OPTION_LABELS[key] ?? key);

  return selected.length > 0 ? selected.join(", ") : "None selected";
};

const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD || process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("EMAIL_USER and EMAIL_PASSWORD environment variables are not configured.");
  }

  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, helpOptions } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      helpOptions?: HelpOptionsPayload;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      throw new Error("CONTACT_EMAIL environment variable is not configured.");
    }

    const transporter = createTransporter();

    const formattedOptions = formatSelectedOptions(helpOptions);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: contactEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Help Needed:</strong> ${formattedOptions}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Error sending the email. Check server logs for details.";

    return NextResponse.json({ message }, { status: 500 });
  }
}

