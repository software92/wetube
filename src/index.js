import express from 'express';
import { urlencoded } from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

import './db';

const app = express();
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
// app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log('Server listening on port 4000');

app.listen(4000, handleListening);
