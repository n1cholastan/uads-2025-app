import { Router } from "express";
import { getEvents, getEventById } from "../controllers/EventController";

const eventsRoutes = Router();

// Get all Sponsors
eventsRoutes.get("/", getEvents);
eventsRoutes.get("/:id", getEventById);

export default eventsRoutes;