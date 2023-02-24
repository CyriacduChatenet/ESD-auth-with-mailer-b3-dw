import express from 'express';
import { sayHello } from '../controllers/hello.controller';
import { MailController } from '../controllers/mail.controller';
import { PostController } from '../controllers/post.controller';
import { UserController } from '../controllers/user.controller';

export const router = express.Router();
const postController = new PostController();
const mailController = new MailController();
const userController = new UserController();

router.get('/api/v1', sayHello)
router.get('/api/v1/post', postController.getAllPosts);
router.post('/api/v1/send-mail',mailController.sendWelcomeMail);

router.post('/api/v1/user', userController.create);
router.get('/api/v1/user', userController.findAll);
router.get('/api/v1/user/:id', userController.findOne);
router.patch('/api/v1/user/:id', userController.update);
router.delete('/api/v1/user/:id', userController.delete);