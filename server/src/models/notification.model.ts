"use strict";

import { NotificationAttributes } from "../modules/notification/types/notifacation.model";

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Notification extends Model<NotificationAttributes> implements NotificationAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id?: number;
    name!: string;
    datetime!: Date;
    status!: number;

    static associate(models: any) {
      // define association here
      // User.hasMany(models.Article);
    }
  }
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};