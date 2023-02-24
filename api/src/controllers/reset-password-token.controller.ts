import { Request, Response } from 'express';

import ResetTokenPassword from '../models/resetTokenPassword';

export class ResetPasswordToken {
    findAll = async (req: Request, res: Response) => {
        const resetPasswordTokens = await ResetTokenPassword.find();
        res.status(200).json(resetPasswordTokens);
    }

    findOne = async (req: Request, res: Response) => {
        const { token } = req.params;
        const resetTokenPassword = await ResetTokenPassword.findById({ token: token});
        res.status(200).json(resetTokenPassword);
    };
}