import express from 'express';
import authRouter from './src/Routes/authRoutes.js';
import productRouter from './src/Routes/productRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/api', productRouter);

const port = PORT ?? 3002;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});