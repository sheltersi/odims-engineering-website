import { Resend } from "resend";

import { emailFooter } from "@/data/emailFooter";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const data = await req.json();

  const { name, email, phone, service, message } = data;

  try {
    await resend.emails.send({
      from: "Odims Website <noreply@mail.odims.co.za>",
      to: ["sheltersibanda002@gmail.com"],
      subject: `New Contact Request: ${service}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

     // AUTO-REPLY TO CUSTOMER
    await resend.emails.send({
      from: "ODiMs Welding & Automation <noreply@mail.odims.co.za>",
      to: [email],
      subject: "We’ve received your request",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>ODiMs Welding & Automation</strong>.</p>
        <p>We’ve received your request for <strong>${service}</strong> and will contact you shortly.</p>
        <p>If urgent, you can call us directly.</p>
        <br/>
         <p>— Best Regards</p>
        <p>— ODiMs Team</p>

         ${emailFooter()}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
