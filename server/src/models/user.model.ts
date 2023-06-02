"use strict";

import { UserAttributes, UserRole } from "../modules/user/user.types";
import { Model, UUIDV4 } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    username!: string;
    password!: string;
    name!: string;
    status!: boolean;
    role!: UserRole;
    department!: string;

    static associate(models: any) {
      // define association here
      // User.hasMany(models.Article);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      role: {
        type: DataTypes.ENUM(UserRole.USER, UserRole.ADMIN), // Define the enum field with possible values
        allowNull: false,
        defaultValue: UserRole.USER
      },
      department: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};