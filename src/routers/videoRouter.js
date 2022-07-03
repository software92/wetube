import express from 'express';
import {
  getEdit,
  postEdit,
  see,
  deleteVideo,
  getUpload,
  postUpload,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/:id(\\d+)/edit', getEdit);
videoRouter.post('/:id(\\d+)/edit', postEdit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);
videoRouter.get('/upload', getUpload);
videoRouter.post('/upload', postUpload);
// URL parameter가 상위에 있어도 정규표현식을 사용해 문자를 제한하기 때문에,
// upload 경로 탐색이 가능한 것으로 보임

export default videoRouter;
