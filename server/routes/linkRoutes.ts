import { Router } from "express";
import { getLinks } from '../controllers/LinkController';

const linkRoutes = Router();

linkRoutes.get('/', getLinks);

export default linkRoutes;