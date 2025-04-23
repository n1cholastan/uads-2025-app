import { Router } from 'express';
import { getSponsors } from '../controllers/SponsorController';

const sponsorRoutes = Router();

sponsorRoutes.get('/', getSponsors);

export default sponsorRoutes;
