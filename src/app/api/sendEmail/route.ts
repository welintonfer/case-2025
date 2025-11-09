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
      subject: `CREATIVE-TON | New Contact Form Submission from ${name}`,
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
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "Thanks for getting in touch! 🎨",
    //   html: `
    //     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #2c3e50;">Thanks for getting in touch! 🎨</h2>
          
    //       <p>Hi <strong>${name}</strong>,</p>
          
    //       <p>Thanks so much for reaching out and for visiting my portfolio at <a href="https://creative-ton.com" style="color: #3498db; text-decoration: none;">creative-ton.com</a>. I truly appreciate your message!</p>
          
    //       <p>I'm currently busy working on some exciting projects, but I'll get back to you as soon as I have the opportunity to review your email properly.</p>
          
    //       <p>In the meantime, feel free to explore my latest design work and updates on the website.</p>
          
    //       <p style="margin-top: 30px;">Best wishes,</p>
          
    //       <div style="border-left: 4px solid #3498db; padding-left: 20px; margin: 20px 0;">
    //         <p style="margin: 0; font-weight: bold;">Welinton Fernandes</p>
    //         <p style="margin: 5px 0; color: #7f8c8d;">Product & Visual Designer</p>
    //         <p style="margin: 0;"><a href="https://creative-ton.com" style="color: #3498db; text-decoration: none;">creative-ton.com</a></p>
    //       </div>
          
    //       <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
    //       <p style="font-size: 12px; color: #95a5a6;">
    //         This is an automated response. Please do not reply to this email.
    //       </p>
    //     </div>
    //   `,
    // });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "🌟 Your message made my day! | creative-ton.com",
      html: `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.7; color: #0F0F0F; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #FDFAEF 0%, #FAF5E6 100%); padding: 40px 30px; border-radius: 12px;">
          
          <!-- Header with personal touch -->
          <div style="text-align: center; margin-bottom: 30px;">
            <svg width="255" height="254" viewBox="0 0 255 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_3346_79762)">
                 <circle cx="118.978" cy="123.239" r="18.9789" transform="rotate(90 118.978 123.239)" fill="#CFC9F3"/>
                </g>
                <g filter="url(#filter1_f_3346_79762)">
                <circle cx="124.789" cy="134.084" r="18.9789" transform="rotate(90 124.789 134.084)" fill="#DAF7D2"/>
                </g>
                <g filter="url(#filter2_f_3346_79762)">
                <circle cx="128.275" cy="120.528" r="18.9789" transform="rotate(90 128.275 120.528)" fill="#F1FEA1"/>
                </g>
                <g filter="url(#filter3_f_3346_79762)">
                <circle cx="136.021" cy="126.725" r="18.9789" transform="rotate(90 136.021 126.725)" fill="#C9E5F3"/>
                </g>
                <g filter="url(#filter4_f_3346_79762)">
                <circle cx="129.824" cy="130.211" r="18.9789" transform="rotate(90 129.824 130.211)" fill="#A1FEAF"/>
                </g>
                <g filter="url(#filter5_f_3346_79762)">
                <circle cx="125.951" cy="118.979" r="18.9789" transform="rotate(90 125.951 118.979)" fill="#FEB8A1"/>
                </g>
                <g opacity="0.5" filter="url(#filter6_f_3346_79762)">
                <circle cx="125.951" cy="126.725" r="18.9789" transform="rotate(90 125.951 126.725)" fill="#FDFAEF"/>
                <circle cx="125.951" cy="126.725" r="20.3345" transform="rotate(90 125.951 126.725)" stroke="#F1FEA1" stroke-width="2.71127"/>
                </g>
                <g filter="url(#filter7_f_3346_79762)">
                <circle cx="127.69" cy="128.094" r="18.9789" fill="#FDFAEF"/>
                </g>
                <g filter="url(#filter8_f_3346_79762)">
                <circle cx="127.69" cy="128.094" r="18.9789" fill="#FDFAEF"/>
                </g>
                <g filter="url(#filter9_f_3346_79762)">
                <circle cx="127.69" cy="128.094" r="18.9789" fill="#FDFAEF"/>
                </g>
                <g filter="url(#filter10_f_3346_79762)">
                <circle cx="127.69" cy="128.094" r="18.9789" fill="#FDFAEF"/>
                </g>
                <g filter="url(#filter11_ddddii_3346_79762)">
                <circle cx="127.69" cy="128.094" r="18.9789" fill="#222222"/>
                </g>
                <defs>
                <filter id="filter0_f_3346_79762" x="0" y="4.25977" width="237.957" height="237.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter1_f_3346_79762" x="5.81055" y="15.1055" width="237.957" height="237.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter2_f_3346_79762" x="9.29688" y="1.54883" width="237.957" height="237.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter3_f_3346_79762" x="17.043" y="7.74609" width="237.957" height="237.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter4_f_3346_79762" x="10.8457" y="11.2324" width="237.957" height="237.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter5_f_3346_79762" x="6.97266" y="0" width="237.957" height="237.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter6_f_3346_79762" x="87.9922" y="88.7676" width="75.9161" height="75.9151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="8.1338" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter7_f_3346_79762" x="107.936" y="108.341" width="39.5063" height="39.5073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="0.387324" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter8_f_3346_79762" x="107.162" y="107.566" width="41.0556" height="41.0566" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="0.774648" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter9_f_3346_79762" x="105.612" y="106.017" width="44.1542" height="44.1552" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1.5493" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter10_f_3346_79762" x="104.838" y="105.242" width="45.7035" height="45.7045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1.93662" result="effect1_foregroundBlur_3346_79762"/>
                </filter>
                <filter id="filter11_ddddii_3346_79762" x="102.711" y="103.115" width="49.957" height="49.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.972549 0 0 0 0 0.921569 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3346_79762"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.972549 0 0 0 0 0.921569 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_3346_79762" result="effect2_dropShadow_3346_79762"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.972549 0 0 0 0 0.921569 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_3346_79762" result="effect3_dropShadow_3346_79762"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.972549 0 0 0 0 0.921569 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="effect3_dropShadow_3346_79762" result="effect4_dropShadow_3346_79762"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_3346_79762" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.972549 0 0 0 0 0.921569 0 0 0 0.988235 0"/>
                <feBlend mode="normal" in2="shape" result="effect5_innerShadow_3346_79762"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.972549 0 0 0 0 0.921569 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="effect5_innerShadow_3346_79762" result="effect6_innerShadow_3346_79762"/>
                </filter>
                </defs>
            </svg>


            <h1 style="color: #0F0F0F; margin: 0; font-size: 28px; font-weight: 700;">Hello <strong style="color: #FEA1A1;">${name}</strong>!</h1>
          </div>

          <!-- Main content -->
          <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 4px 20px rgba(15, 15, 15, 0.1); margin-bottom: 25px;">
            <p style="margin-bottom: 20px; font-size: 16px; color: #222222;">
              Thank you for visiting <a href="https://creative-ton.com" style="color: #FEA1A1; text-decoration: none; font-weight: 600;">creative-ton.com</a> and taking the time to reach out. As a Product & Visual Designer with over 15 years of experience, I truly value meaningful connections in our creative community.
            </p>

            <div style="background: #DAF7D2; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #A1FEAF;">
              <p style="margin: 0; color: #222222; font-style: italic;">
                "Good design is obvious. Great design is transparent."<br>
                <span style="font-size: 14px; color: #0F0F0F;">- Inspired by our work together</span>
              </p>
            </div>

            <p style="margin-bottom: 20px; font-size: 16px; color: #222222;">
              I'm currently immersed in some exciting projects (including AI-powered SaaS platforms and ergonomic simulation tools), but I'll personally review your message and get back to you within 24-48 hours.
            </p>

            <p style="margin-bottom: 0; font-size: 16px; color: #222222;">
              In the meantime, feel free to explore some of my recent case studies that might interest you:
            </p>
          </div>

          <!-- Project highlights grid -->
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 30px;">
            <a href="https://creative-ton.com/work/eir" style="background: #C9E5F3; padding: 15px; border-radius: 8px; text-decoration: none; color: #0F0F0F; text-align: center; transition: transform 0.2s;">
              <div style="font-size: 14px; font-weight: 600;">Eir Telecom</div>
            </a>
            <a href="https://creative-ton.com/work/habitushealth" style="background: #F1FEA1; padding: 15px; border-radius: 8px; text-decoration: none; color: #0F0F0F; text-align: center; transition: transform 0.2s;">
              <div style="font-size: 14px; font-weight: 600;">Habitus Health</div>
            </a>
            <a href="https://creative-ton.com/work/europcar" style="background: #F7E9D2; padding: 15px; border-radius: 8px; text-decoration: none; color: #0F0F0F; text-align: center; transition: transform 0.2s;">
              <div style="font-size: 14px; font-weight: 600;">Europcar</div>
            </a>
            <a href="https://creative-ton.com/work/caro" style="background: #FEA1A1; padding: 15px; border-radius: 8px; text-decoration: none; color: #0F0F0F; text-align: center; transition: transform 0.2s;">
              <div style="font-size: 14px; font-weight: 600;">CARO Climate</div>
            </a>
          </div>

          <!-- Signature -->
          <div style="border-left: 4px solid #CFC9F3; padding-left: 25px; margin: 30px 0;">
            <p style="margin: 0; font-weight: bold; color: #0F0F0F; font-size: 18px;">Welinton Fernandes</p>
            <p style="margin: 5px 0; color: #222222; font-size: 16px;">Senior Product & Visual Designer</p>
            <p style="margin: 0;">
              <a href="https://creative-ton.com" style="color: #FEA1A1; text-decoration: none; font-weight: 600;">creative-ton.com</a> • 
              <a href="https://www.linkedin.com/in/welintonfernandes" style="color: #FEA1A1; text-decoration: none; font-weight: 600;">LinkedIn</a>
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 25px; border-top: 1px solid #E0E0E0;">
            <p style="font-size: 12px; color: #222222; margin: 0;">
              This is an automated response, but I'll personally reply soon.<br>
              Crafted with care from my design studio 🎨
            </p>
          </div>
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

