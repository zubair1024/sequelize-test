const Sequelize = require("sequelize");

module.exports = db.sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
});