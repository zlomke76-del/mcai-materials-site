import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const { name, company, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "Global GPI <contact@global-gpi.com>",
      to: ["charlie@global-gpi.com"],
      replyTo: email,
      subject: `Global GPI Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>New Global GPI Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>

          <hr style="margin:20px 0;" />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send message.",
      },
      {
        status: 500,
      }
    );
  }
}
