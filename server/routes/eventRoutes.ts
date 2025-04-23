import { Router } from 'express';
import { getEvents, getEventById } from '../controllers/EventController';

const eventsRoutes = Router();

eventsRoutes.get('/', getEvents);
eventsRoutes.get('/:id', getEventById);

export default eventsRoutes;
