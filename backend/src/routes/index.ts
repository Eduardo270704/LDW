import { Router } from "express";
import sinner from "./sinner";

const routes = Router();

routes.use("/sinner", sinner);

export default routes;
