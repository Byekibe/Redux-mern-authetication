import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
