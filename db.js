"use strict";

const Sequelize = require("sequelize");
const sql = require("mssql");
//get the default promise

module.exports = {
  sequelize: null,
  sql: sql,
  sqldbURI: "mssql://sa:root@localhost:1433/RAZRTEST",
  sqldb: {
    dialect: "mssql",
    database: "RAZRTEST",
    username: "sa",
    host: "localhost",
    port: "1433",
    password: "root",
    logging: true
  },
  mssqlConnect: function () {
    return new Promise(resolve => {
      this.sequelize = new Sequelize(this.sqldb);
      this.sequelize
        .authenticate()
        .then(async () => {
          console.log("DB: Connection has been established successfully.");
          const pool = await this.sql.connect(this.sqldbURI);
          let modelsLoaded = await this.loadModels();
          if (modelsLoaded) {
            this.sequelize.sync({
              logging: console.log
            }).then(() => {
              resolve(true);
            });
          }
        })
        .catch(err => {
          console.error("DB: Unable to connect to the database:", err);
          resolve(false);
        });
    });
  },
  //load models
  loadModels: function () {
    return new Promise(resolve => {
      this.Project = require("./models/Project");
      resolve(true);
    });
  }
};
