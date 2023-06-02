import express from "express";
import dairyController from "./dairy.controller";

const router = express.Router();

router.post('/', dairyController.handleCreateDairy)

export default router