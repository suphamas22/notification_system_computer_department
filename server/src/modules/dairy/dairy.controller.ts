

import dairyService from "./dairy.service";
import { Request, Response } from "express";

export const handleCreateDairy = async (req: Request, res: Response) =>{
    try {
        const body = req.body;
        const payload = await dairyService.createDairy(body);
        res.status(200).json({
            msg:"create dairy was successfully",
            payload
        })
    } catch (error) {
        res.status(400).json({
            msg:"create dairy was failed",
            payload : {}
        })        
    }
}

export default {
    handleCreateDairy
}