import { Router } from "express";
import { getExecs } from "../controllers/ExecController";

const execRoutes = Router();

// Get all execs
execRoutes.get("/", getExecs);

export default execRoutes;