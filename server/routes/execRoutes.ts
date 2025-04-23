import { Router } from 'express';
import { getExecs } from '../controllers/ExecController';

const execRoutes = Router();

execRoutes.get('/', getExecs);

export default execRoutes;
