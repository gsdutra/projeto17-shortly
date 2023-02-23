import express from 'express';
import authRoutes from './authRoutes.js';
import urlsRoutes from './urlsRoutes.js';
import rankingRoutes from './rankingRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use([authRoutes, urlsRoutes, rankingRoutes, userRoutes]);

export default router;