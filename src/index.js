import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();
app.use(morgan('tiny'));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log('Server listening on port 4000');

app.listen(4000, handleListening);
