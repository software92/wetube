import express from 'express';
import { edit, see, upload, deleteVideo } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);
videoRouter.get('/upload', upload);
// URL parameter가 상위에 있어도 정규표현식을 사용해 문자를 제한하기 때문에,
// upload 경로 탐색이 가능한 것으로 보임

export default videoRouter;
