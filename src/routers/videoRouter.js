import express from 'express';
import { edit, see, upload, deleteVideo } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id', see);
videoRouter.get('/edit', edit);
videoRouter.get('/:id/upload', upload);
videoRouter.get('/delete', deleteVideo);

export default videoRouter;
