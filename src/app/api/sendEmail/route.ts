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
      console.error("Environment variables check:", {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
        CONTACT_EMAIL: !!process.env.CONTACT_EMAIL
      });
      throw new Error("CONTACT_EMAIL environment variable is not configured.");
    }

    const transporter = createTransporter();

    const formattedOptions = formatSelectedOptions(helpOptions);

    // Email para você (notificação de nova mensagem)
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

    // Email automático de agradecimento para o remetente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for getting in touch! 🎨",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">Thanks for getting in touch! 🎨</h2>
          
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>Thanks so much for reaching out and for visiting my portfolio at <a href="https://creative-ton.com" style="color: #3498db; text-decoration: none;">creative-ton.com</a>. I truly appreciate your message!</p>
          
          <p>I'm currently busy working on some exciting projects, but I'll get back to you as soon as I have the opportunity to review your email properly.</p>
          
          <p>In the meantime, feel free to explore my latest design work and updates on the website.</p>
          
          <p style="margin-top: 30px;">Best wishes,</p>
          
          <div style="border-left: 4px solid #3498db; padding-left: 20px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">Welinton Fernandes</p>
            <p style="margin: 5px 0; color: #7f8c8d;">Product & Visual Designer</p>
            <p style="margin: 0;"><a href="https://creative-ton.com" style="color: #3498db; text-decoration: none;">creative-ton.com</a></p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="font-size: 12px; color: #95a5a6;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
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

