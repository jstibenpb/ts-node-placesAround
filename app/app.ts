import express, { Application } from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import { loggerMiddleware } from './middlewares/loggers';

// Create a new express application instance
const app: Application = express();

app.use(bodyParser.json());
app.use(loggerMiddleware);

routes(app);

export = app;
