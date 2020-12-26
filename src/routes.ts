import { Router } from 'express';

import { UsersController } from './app/controller/users.controller';

const router = Router();
const userController = new UsersController();

router.get('/users', userController.get);

export default router;
