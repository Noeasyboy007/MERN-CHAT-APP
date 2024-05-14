import express from 'express';
import protectRoute from '../middleware/protectRoutes.js';
import { getUserForsidebar } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/',protectRoute,getUserForsidebar);

export default router;