import express from 'express';
import { AuthController } from '../controllers/auth.controller';

export const authRouter = express.Router();
const authController = new AuthController()

authRouter.post('/api/v1/auth/signin', authController.signin);
authRouter.post('/api/v1/auth/signup', authController.signup);
authRouter.post('/api/v1/auth/forgot-password', authController.forgotPassword);
authRouter.post('/api/v1/auth/reset-password', authController.resetPassword);