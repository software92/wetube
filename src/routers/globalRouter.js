import express from 'express';
import { join, login } from '../controllers/userController';
import { search, trending } from '../controllers/videoController';

const globalRouter = express.Router();

// users
globalRouter.get('/', trending);
globalRouter.get('/search', search);
// videos
globalRouter.get('/join', join);
globalRouter.get('/login', login);

export default globalRouter;
