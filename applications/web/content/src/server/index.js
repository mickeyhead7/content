import dotenv from 'dotenv';
import express from 'express';
import viewEngine from '@app/lib/viewEngine';
import routes from './routes';
import themeResets from '@packages/themes/default/resets';

dotenv.config();

const port = process.env.NODE_PORT;
const app = express();

routes(app);

app.engine('js', viewEngine(themeResets));
app.set('view engine', 'js');
app.set('views', `${__dirname}/../applications`);
app.use(express.static('public'));
app.listen(port);
