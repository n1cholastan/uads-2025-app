import { Router } from "express";
import { getSponsors } from "../controllers/sponsorController";

const sponsorRoutes = Router();

// Get all Sponsors
sponsorRoutes.get("/", getSponsors);

export default sponsorRoutes;