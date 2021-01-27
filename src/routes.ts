import { Router } from 'express';

import { AuthController } from './app/controller/auth.controller';
import { UsersController } from './app/controller/users.controller';

const router = Router();
const usersController = new UsersController();
const authController = new AuthController();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/users', usersController.get);

export default router;
