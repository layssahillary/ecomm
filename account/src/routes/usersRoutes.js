import { Router } from 'express';
import usersController from '../controllers/userController.js';
import { localStrategyMiddleware } from '../middleware/localStrategyMiddleware.js'
const usersRouter = Router();
usersRouter
  .get('/accounts', usersController.getAll)
  .post('/accounts/login', localStrategyMiddleware, usersController.login)
  .post('/accounts', usersController.create)
export default usersRouter;