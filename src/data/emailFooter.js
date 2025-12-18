export function emailFooter() {
  return `
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:16px;border-radius:8px;font-family:Arial,sans-serif;">
      <tr>
        <td style="padding-bottom:8px;">
          <strong style="color:#111827;">ODiMs Welding & Automation</strong>
        </td>
      </tr>

      <tr>
        <td style="padding-bottom:6px;">
          Professional welding, gates & automation solutions
        </td>
      </tr>

      <tr>
        <td style="padding-bottom:6px;">
          📍 Johannesburg, South Africa
        </td>
      </tr>

      <tr>
        <td style="padding-bottom:6px;">
          📞 <a href="tel:+27810713204" style="color:#2563eb;text-decoration:none;">
            +27 81 071 3204
          </a>
        </td>
      </tr>

      <tr>
        <td style="padding-bottom:6px;">
          ✉️ <a href="mailto:info@odims.co.za" style="color:#2563eb;text-decoration:none;">
            info@odims.co.za
          </a>
        </td>
      </tr>

      <tr>
        <td style="padding-top:10px;font-size:12px;color:#6b7280;">
          © ${new Date().getFullYear()} ODiMs Welding & Automation. All rights reserved.
        </td>
      </tr>
    </table>
  `;
}
