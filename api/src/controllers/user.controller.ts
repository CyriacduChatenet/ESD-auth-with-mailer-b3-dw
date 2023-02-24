import { Request, Response } from "express";

import User from "../models/user.schema";

export class UserController {
    findAll = async (req: Request, res: Response) => {
        const users = await User.find();
        res.status(200).json(users);
    }

    findOne = async (req: Request, res: Response) => {
        const { email } = req.params;
        const user = await User.findById({ email: email});
        res.status(200).json(user);
    }

    create = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.status(201).json(user);
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { email, password } = req.body;
        const user = await User.findByIdAndUpdate(id, { email, password }, { new: true });
        res.status(200).json(user);
    };

    delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
    };
};