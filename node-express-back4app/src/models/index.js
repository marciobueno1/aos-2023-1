import Sequelize from "sequelize";

import getUserModel from "./user";
import getMessageModel from "./message";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

const models = {
  User: getUserModel(sequelize, Sequelize),
  Message: getMessageModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
