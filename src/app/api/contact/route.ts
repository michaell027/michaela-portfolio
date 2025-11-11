import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!CONTACT_EMAIL || !SENDER_EMAIL) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: SENDER_EMAIL,
      to: process.env.CONTACT_EMAIL!,
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[v0] Contact API error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
