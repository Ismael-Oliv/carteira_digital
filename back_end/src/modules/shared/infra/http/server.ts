import 'reflect-metadata';
import express from 'express';
import '../typeorm';
import '../../container';
import cors from 'cors';
import { handlingErrors } from './middleware/handlingErrors';

import { routes } from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use(handlingErrors);

app.listen(3001, () => console.log('Server is running on port 3001'));
