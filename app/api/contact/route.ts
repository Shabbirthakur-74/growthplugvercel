import * as nodemailer from "nodemailer";

/* ✅ Transporter with pooling (Option 1) */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, services, message } = await req.json();

    const safeEmail = email?.trim().toLowerCase();

    if (!name || !safeEmail || !phone) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const servicesText =
      Array.isArray(services) && services.length > 0
        ? services.join(", ")
        : "Not specified";

    /* Admin mail */
    const adminMail = {
      from: `"Website Lead" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: safeEmail,
      subject: `New Contact Form Submission: ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Services:</strong> ${servicesText}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
      `,
    };

    /* User mail */
    const userMail = {
      from: `"GrowthPlug Agency" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      replyTo: process.env.ADMIN_EMAIL,
      subject: "Thank you for contacting us",
      text: `Hi ${name},

Thank you for reaching out to GrowthPlug Agency.
We have received your message and will get back to you shortly.

— GrowthPlug Agency Team`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to GrowthPlug Agency.</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>— GrowthPlug Agency Team</strong></p>
      `,
    };

    /* 🚀 Option 3: Fire-and-forget email sending */
    Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]).catch((err) => {
      console.error("Background email error:", err);
    });

    /* ✅ Respond immediately */
    return Response.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
