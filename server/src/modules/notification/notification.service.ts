import { NotificationAttributes } from "./notification.types";

import db from "../../models"

const NotificationModel = db.Notification;

export const createNotification = async (body: NotificationAttributes): Promise<NotificationAttributes> => {
    try {
        const response = await NotificationModel.create(body);
        return response 
    } catch (error) {
        throw new Error()
    }
}

export default {
    createNotification
}