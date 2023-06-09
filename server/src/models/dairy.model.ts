"use strict";

import { DairyAttributes } from "../modules/dairy/dairy.types";
import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Dairy extends Model<DairyAttributes> implements DairyAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    name!: string;
    content!: string;
    datetime!: Date;
    userId!: string;

    static associate(models: any) {
      // define association here
      Dairy.belongsTo(models.User);
    }
  }
  Dairy.init(
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
      content: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
				field: 'user_id'
      }
    },
    {
      sequelize,
      modelName: "Dairy",
    }
  );
  return Dairy;
};