import express from 'express';
import { AuthController } from '../controllers/auth.controller';

export const authRouter = express.Router();
const authController = new AuthController()

authRouter.post('/api/v1/auth/signin', authController.signin);
authRouter.post('/api/v1/auth/signup', authController.signup);