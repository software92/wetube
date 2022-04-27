import express from 'express';
import morgan from 'morgan';

const app = express();

const handleHome = (req, res) => {
  return res.send('in root');
};

app.use(morgan('tiny'));
app.get('/', handleHome);

const handleListening = () => console.log('Server listening on port 4000');

app.listen(4000, handleListening);
