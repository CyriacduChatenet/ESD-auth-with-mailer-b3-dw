import { Response, Request } from "express";
import bcrypt from "bcrypt";

import jwt from 'jsonwebtoken';

import User from "../models/user.schema";
import { MailController } from "./mail.controller";

export class AuthController {
  mailController = new MailController();

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
      this.mailController.sendMail(email);
      res.status(201).json(user);
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
