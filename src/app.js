
import express from 'express';
import bodyParser from 'body-parser';
import tronwebRoutes from './interfaces/routes/tronwebRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api', tronwebRoutes);

export default app;