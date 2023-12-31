import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "../../../services/email/email-template";
import { NextApiRequest, NextApiResponse } from "next";

interface EmailTemplateProps {
  fileType: string;
  fileName: string;
  userName: string;
  shortUrl: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const { userName, fileName, fileType, shortUrl } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Message from Up Share",
      react: EmailTemplate({
        userName,
        fileName,
        fileType,
        shortUrl,
      }) as React.ReactElement,
    });
    if (error) {
      return Response.json({ error });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
