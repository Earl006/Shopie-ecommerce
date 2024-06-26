import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import categoryRoutes from './routes/categoryRoutes';
const app = express();
export const prisma = new PrismaClient();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);
export default app;

