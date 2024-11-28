import { Router } from 'express';
import { login, register } from '../Controller/authController.js';
import { validateUserData } from '../Middleware/validation.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', validateUserData, register);


export default authRouter;
