import express from "express";
import dairyController from "./dairy.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post('/', authMiddleware, dairyController.handleCreateDairy)
router.get('/:id', authMiddleware, dairyController.handleGetOneDairy)
router.get('/', authMiddleware, dairyController.handleGetOneDairy)

export default router