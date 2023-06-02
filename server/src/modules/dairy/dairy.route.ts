import express from "express";
import dairyController from "./dairy.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post('/', dairyController.handleCreateDairy)
router.get('/:id', authMiddleware, dairyController.handleGetOneDairy)

export default router