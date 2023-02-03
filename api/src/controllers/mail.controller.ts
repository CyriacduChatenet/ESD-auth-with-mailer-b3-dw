import { Request, Response } from "express";
import nodemailer from "nodemailer";

export class MailController {
  config = () => {
    return nodemailer.createTransport({
      host: "localhost",
      port: 25,
    });
  };
  sendMail = (email: string) => {
    this.config().sendMail({
        from: 'me@gmail.com',
        to: 'you@gmail.com',
        subject: 'Signup user',
        text: `Welcome ${email} to my website`,
    })
  };
}
