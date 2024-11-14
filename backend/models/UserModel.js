import { Sequelize } from "sequelize";
import auth from "../config/Auth.js";

const { DataTypes } = Sequelize;

const Users = auth.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default Users;
