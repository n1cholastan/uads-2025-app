import express from 'express';
import eventRoutes from './eventRoutes';
import sponsorRoutes from './sponsorRoutes';
import execRoutes from './execRoutes';

const router = express.Router();

// All event routes
router.use('/events', eventRoutes);

// All sponsor routes
router.use('/sponsors', sponsorRoutes);

// All exec routes
router.use('/execs', execRoutes);

export default router;
