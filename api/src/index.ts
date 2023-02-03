import express from 'express';
import cors from 'cors';
import { DBconnection } from './config/dbConfig';
import { router } from './routes';
import { authRouter } from './routes/auth.router';

const app = express();

app.use(express.json());
app.use(cors());
DBconnection();
app.use(router);
app.use(authRouter);

app.listen(8000, () => {
    console.log('listening on port 8000');
})