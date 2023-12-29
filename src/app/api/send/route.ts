import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/services/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Message from Up Share",
      react: EmailTemplate({
        userName: "John",
        fileName: "John",
        fileType: "John",
        shortUrl: "John",
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
