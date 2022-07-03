// configuration file
import './db';
import './models/Video';
import app from './index';

const handleListening = () => console.log('Server listening on port 4000');

app.listen(4000, handleListening);
