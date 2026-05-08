import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      phone,
      message,
    } = body;

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
      },
      {
        status: 500,
      }
    );
  }
}
