const nodemailer = require("nodemailer");

function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

async function sendContactEmail({ name, email, subject, message }) {
  const transporter = createTransporter();

  if (!transporter) {
    throw new Error(
      "Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in backend/.env"
    );
  }

  const to = process.env.GMAIL_TO || process.env.GMAIL_USER;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Message</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Lumina Agency Website</p>
      </div>
      <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 100px;">Name</td>
            <td style="padding: 10px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Subject</td>
            <td style="padding: 10px 0; font-weight: 600;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 20px; color: #9ca3af; font-size: 12px; text-align: center;">
          Sent from Lumina Agency contact form
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Lumina Agency" <${process.env.GMAIL_USER}>`,
    to,
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
  });
}

module.exports = { sendContactEmail };
