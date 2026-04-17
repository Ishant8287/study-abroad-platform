const nodemailer = require("nodemailer");
const env = require("../config/env");

let transporter = null;

/**
 * Lazily initialise the SMTP transporter.
 * Returns null when SMTP is not configured (dev without mail server).
 */
function getTransporter() {
  if (transporter) return transporter;

  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    console.warn(
      "[emailService] SMTP not configured — emails will be skipped. Set SMTP_HOST, SMTP_USER, SMTP_PASS."
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    secure: env.smtpPort === 465,
    auth: {
      user: env.smtpUser,
      pass: env.smtpPass,
    },
  });

  return transporter;
}

/**
 * Pretty-print a status slug (e.g. "under-review" → "Under Review").
 */
function formatStatus(status) {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Send a status-change notification email.
 *
 * This function is fire-and-forget — it logs errors but never throws,
 * so email failures cannot break the API response.
 */
async function sendStatusChangeEmail(to, fullName, programTitle, oldStatus, newStatus) {
  try {
    const transport = getTransporter();
    if (!transport) return;

    const subject = `Application Update: ${formatStatus(newStatus)}`;

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
        <h2 style="color: #0f172a; margin-top: 0;">Application Status Updated</h2>
        <p style="color: #334155; font-size: 15px;">Hi <strong>${fullName}</strong>,</p>
        <p style="color: #334155; font-size: 15px;">
          Your application for <strong>${programTitle}</strong> has been updated:
        </p>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin: 20px 0;">
          <p style="margin: 0; color: #64748b; font-size: 13px;">Previous Status</p>
          <p style="margin: 4px 0 16px; color: #0f172a; font-size: 16px; font-weight: 600;">${formatStatus(oldStatus)}</p>
          <p style="margin: 0; color: #64748b; font-size: 13px;">New Status</p>
          <p style="margin: 4px 0 0; color: #2563eb; font-size: 16px; font-weight: 600;">${formatStatus(newStatus)}</p>
        </div>
        <p style="color: #64748b; font-size: 13px; margin-bottom: 0;">
          — Study Abroad Platform
        </p>
      </div>
    `;

    await transport.sendMail({
      from: env.smtpFrom,
      to,
      subject,
      html,
    });

    console.log(`[emailService] Status change email sent to ${to}`);
  } catch (error) {
    console.error("[emailService] Failed to send email:", error.message);
  }
}

module.exports = {
  sendStatusChangeEmail,
};
