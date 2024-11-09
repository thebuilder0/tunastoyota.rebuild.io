import { Sequelize } from "sequelize";

const db = new Sequelize("toyota_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
