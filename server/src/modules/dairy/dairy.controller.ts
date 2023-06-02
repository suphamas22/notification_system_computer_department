

import dairyService from "./dairy.service";
import { Request, Response } from "express";

export const handleCreateDairy = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const body = req.body;
        const payload = await dairyService.createDairy({...body, userId});
        res.status(200).json({
            msg: "create dairy was successfully",
            payload
        })
    } catch (error) {
        res.status(400).json({
            msg: "create dairy was failed",
            payload: {}
        })
    }
}

export const handleGetOneDairy = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const userId= req.user?.id;
        const payload = await dairyService.getOneDairy(id, userId!);
        res.status(200).json({
            msg:"get one dairy was successfully",
            payload
        })
    } catch (error) {
        res.status(400).json({
            msg: "get one dairy was failed",
            payload: {}
        })
    }
}

export const handleGetAllDairy = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const payload = await dairyService.getAllDairy(userId!);
        res.status(200).json({
            msg:"get all dairy was successfully",
            payload
        })
    } catch (error) {
        res.status(400).json({
            msg: "get all dairy was failed",
            payload: {}
        })
    }
}

export const handleUpdateDairy = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const userId = req.user?.id
        const updateBody = req.body;
        const payload = await dairyService.updateDairy(id, userId!, updateBody);
        res.status(200).json({
            msg:"update dairy was successfully",
            payload
        })
    } catch (error) {
        res.status(400).json({
            msg: "update dairy was failed",
            payload: {}
        })
    }
}

export const handleDeleteDairy = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const userId = req.user?.id
        const payload = await dairyService.deleteDairy(id, userId!);
        res.status(200).json({
            msg:"delete dairy was successfully",
            payload
        })
    } catch (error) {
        res.status(400).json({
            msg: "delete dairy was failed",
            payload: {}
        })
    }
}



export default {
    handleCreateDairy,
    handleGetOneDairy,
    handleGetAllDairy,
    handleUpdateDairy,
    handleDeleteDairy
}