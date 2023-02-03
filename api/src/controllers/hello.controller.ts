import { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
    return res.send('hello world');
};