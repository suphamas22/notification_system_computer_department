import { DairyAttributes } from "./dairy.types";
import db from "../../models"
import { UserAttributes } from "modules/user/user.types";

const DairyModel = db.Dairy;

export const createDairy = async (body: DairyAttributes): Promise<DairyAttributes> => {
    try {
        const response = await DairyModel.create(body);
        return response
    } catch (error) {
        throw new Error()
    }
}

export const getOneDairy = async (id: string, userId: number): Promise<DairyAttributes> => {
    try {
        const response = await DairyModel.findOne({
            where: { id, userId }
        })
        if (response) {
            return response
        } else {
            throw new Error();
        }
    } catch (error) {
        throw new Error();
    }
}

export const getAllDairy = async (userId: number): Promise<DairyAttributes[]> => {
    try {
        const response = await DairyModel.findAll({
            where: { userId }
        });
        return response
    } catch (error) {
        throw new Error()
    }
}

export const updateDairy = async (id: string, userId: number, updateDairy: UserAttributes): Promise<UserAttributes> => {
    try {
        const isDairyExist = await DairyModel.findOne({
            where: { id, userId }
        });
        if (isDairyExist) {
            const response = await DairyModel.update({ ...updateDairy }, {
                where: { id, userId }
            })
            return response
        } else {
            throw new Error()
        }
    } catch (error) {
        throw new Error()
    }
}

export const deleteDairy = async (id: string, userId: number): Promise<UserAttributes> => {
    try {
        const isDairyExist = await DairyModel.findOne({
            where: { id, userId }
        });
        if (isDairyExist) {
            const response = await DairyModel.destroy({
                where: { id, userId }
            })
            return response
        } else {
            throw new Error()
        }
    } catch (error) {
        throw new Error()
    }
}

export default {
    createDairy,
    getOneDairy,
    getAllDairy,
    updateDairy,
    deleteDairy
}