// express file
import express from 'express';
import { urlencoded } from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
// app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

export default app;
