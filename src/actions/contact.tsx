"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email-template";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

type ContactFormType = z.infer<typeof ContactSchema>;

export async function sendContactEmail(formData: ContactFormType) {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, message } = result.data;

  try {
    // 1️⃣ Send email to YOU (Admin)
    const demo = await resend.emails.send({
      from: "TextureMaps <support@texturemaps.co.in>",
      to: ["sachinsureka375@gmail.com"],
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });
    

    // 2️⃣ Send confirmation email to CUSTOMER
 const demo1=   await resend.emails.send({
      from: "TextureMaps <support@texturemaps.co.in>",
      to: [email],
      subject: "Thanks for contacting TextureMaps!",
      react: (
        <div>
          <p>Hi {name},</p>
          <p>
            Thanks for reaching out! We’ve received your message and will get
            back to you shortly.
          </p>
          <p>— Team TextureMaps</p>
        </div>
      ),
    });

  
    return { success: true };
    
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return { success: false, error: "Failed to send email" };
  }
}
