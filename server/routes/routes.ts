import express from 'express';
import eventRoutes from './eventRoutes';
import sponsorRoutes from './sponsorRoutes';
import execRoutes from './execRoutes';
import linkRoutes from './linkRoutes';

const router = express.Router();

// All event routes
router.use('/events', eventRoutes);

// All sponsor routes
router.use('/sponsors', sponsorRoutes);

// All exec routes
router.use('/execs', execRoutes);

// All link routes
router.use('/links', linkRoutes);

export default router;
