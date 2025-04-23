import express from 'express';
import eventRoutes from './eventRoutes';
import sponsorRoutes from './sponsorRoutes';
import execRoutes from './execRoutes';

const router = express.Router();

// All event routes
router.use('/api/events', eventRoutes);

// All sponsor routes
router.use('/api/sponsors', sponsorRoutes);

// All exec routes
router.use('/api/execs', execRoutes);

export default router;
