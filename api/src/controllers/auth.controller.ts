import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { createHmac } from "crypto";

import User from "../models/user.schema";
import { MailController } from "./mail.controller";
import ResetTokenPassword from "../models/resetTokenPassword";
import { UserController } from "./user.controller";
import { ResetPasswordToken } from "./reset-password-token.controller";

export class AuthController {
  mailController = new MailController();
  userController = new UserController();
  resetPasswordToken = new ResetPasswordToken();


  signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const findUserInDB = await User.findOne({ email });

    if(!findUserInDB) {
        res.status(401).json({message: 'user not found'});
    }

    const passwordMatch = await bcrypt.compare(password, String(findUserInDB?.password));

    if(!passwordMatch) {
        res.status(401).json({message: 'invalid credentials'});
    }

    const token = jwt.sign({ email: findUserInDB?.email, password: findUserInDB?.password  }, `${process.env.JWT_SECRET}`, {
        expiresIn: '1h'
    });

    res.status(200).json({ accessToken: token });
  };

  signup = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const encryptPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ email, password: encryptPassword });

    try {
      const savedUser = user.save();
      this.mailController.sendWelcomeMail(email);
      res.status(201).json(user);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;
    const findUserInDB = await User.findOne({ email });

    const resetToken = await createHmac('sha256', `${process.env.JWT_SECRET}`).digest('hex');;

    await ResetTokenPassword.create({ token: resetToken, user: findUserInDB });
    await this.mailController.sendResetPasswordMail(email, resetToken);
    res.status(200).json({ token: resetToken});
  };

  resetPassword = async (req: Request, res: Response) => {
    const { resetToken } = req.params;
    if(resetToken === undefined) {
      throw new Error('token not found');
    }
    // const { password } = req.body;
    // const token = await this.resetPasswordToken.findOne(resetToken);


    // res.json({ resetToken, password });
  };
}
