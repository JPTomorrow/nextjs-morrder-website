import { createRouter } from "./context";
import { z } from "zod";
import nodemailer from "nodemailer";

export const emailRouter = createRouter().mutation("sendEmail", {
  input: z.object({
    senderName: z.string(),
    fromEmail: z.string(),
    message: z.string(),
  }),
  resolve: async ({ input }) => {
    const username = process.env.TO_EMAIL;
    const password = process.env.PASSWORD;

    const name = input.senderName;
    const fromEmail = input.fromEmail;
    const message = input.message;

    const passed = name && fromEmail && message;
    if (!passed) {
      return {
        error: "Please provide a name, message, and email address",
      };
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    const mailOptions = {
      from: username,
      to: username,
      subject: "email sent from morrder.com - sender: " + fromEmail,
      text: "FROM: " + name + "\n\n" + message,
    };

    let info = transporter.sendMail(mailOptions);
    return {
      message: "Email sent",
    };
  },
});
