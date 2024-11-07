import express from 'express';
import authRouter from './src/Routes/route.js';
import dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRouter);

const port = PORT ?? 3002;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});