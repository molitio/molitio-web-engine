/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email, SendResult } from "./types";
import emailjs from "@emailjs/browser";

export const emailClient = async (email: Email): Promise<SendResult> => {
  try {
    if (!email) {
      return "error";
    }

    const message = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID ?? "",
      process.env.EMAILJS_TEMPLATE_ID ?? "",
      {
        text: email.message,
        from_name: email.from_name,
        from_email: email.from_email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_API_KEY ?? ""
    );

    const result = message.status === 200 ? "success" : "error";

    return result;
  } catch (error: any) {
    console.error("client error: ", error);
    return "error";
  }
};
