import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import connectDB from './config/db.js'

const app = express();
const port = process.env.PORT || 5000;
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get("/api", (req, res) => {
    res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
