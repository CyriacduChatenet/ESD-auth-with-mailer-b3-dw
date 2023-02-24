import { Request, Response } from "express";
import nodemailer from "nodemailer";

export class MailController {
  config = () => {
    return nodemailer.createTransport({
      host: "localhost",
      port: 25,
    });
  };

  sendWelcomeMail = (email: string) => {
    this.config().sendMail({
      from: "me@gmail.com",
      to: "you@gmail.com",
      subject: "Signup user",
      text: `Welcome ${email} to my website`,
    });
  };

  sendResetPasswordMail = (email: string, token: string) => {
    this.config().sendMail({
      from: "me@gmail.com",
      to: email,
      subject: "Reset password user",
      html: `<div>
      <a href="http://localhost:5173/reset-password/${token}">Reset password</a>
      </div>`
    });
  };
}
