"use strict";

const Sequelize = require("sequelize");
const sql = require("mssql");
//get the default promise

module.exports = {
  sequelize: null,
  sql: sql,
  sqldbURI: "mssql://sa:root@192.168.1.143:1433/RAZRTEST",
  sqldb: {
    dialect: "mssql",
    database: "RAZRTEST",
    username: "sa",
    host: "192.168.1.143",
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
      try {
        this.Project = require("./models/Project");
        this.TotalRetention = require("./models/TotalRetention");
        this.LivePolicy = require("./models/LivePolicy");
        this.LivePolicyByInception = require("./models/LivePolicyByInception");
        this.TotalPayment=require('./models/TotalPayment');
        this.User=require('./models/User');
        resolve(true);
      } catch (err) {
        console.log('DB: Unable to load model',err);
        resolve(false)
      }
    });
  }
};