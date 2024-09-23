import { Router } from "express";
import controller from "../controllers/SinnerController";

const router = Router();

router.get("/",  controller.list);
router.post("/", controller.create);
router.delete("/",  controller.delete);
router.put("/room",  controller.updatroom);
router.put("/sinner",  controller.updatesinner);

export default router