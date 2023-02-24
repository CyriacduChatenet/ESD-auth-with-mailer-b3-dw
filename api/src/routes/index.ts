import express from 'express';
import { sayHello } from '../controllers/hello.controller';
import { MailController } from '../controllers/mail.controller';
import { PostController } from '../controllers/post.controller';

export const router = express.Router();
const postController = new PostController();
const mailController = new MailController();

router.get('/api/v1', sayHello)
router.get('/api/v1/post', postController.getAllPosts);
router.post('/api/v1/send-mail',mailController.sendWelcomeMail);