import { Router } from 'express';

import { UsersController } from './app/controller/users.controller';
import { dbHealthRoute } from './config/statusMonitor';

const router = Router();
const userController = new UsersController();

router.get('/users', userController.get);

router.get('/admin/health/database', dbHealthRoute);

export default router;
