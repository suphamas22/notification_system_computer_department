

import dairyService from "./dairy.service";
import { Request, Response } from "express";

export const handleCreateDairy = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const payload = await dairyService.createDairy(body);
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
        const payload = await dairyService.getOneDairy(id);
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
        const payload = await dairyService.getAllDairy();
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


export default {
    handleCreateDairy,
    handleGetOneDairy
}