const Sequelize = require('sequelize');

const schema = {
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "LastRunJob",
        validate: {
            noEmpty: true
        }
    },
    etlJob: Sequelize.STRING,
    startDate: {
        type: Sequelize.DATE
    },
    endDate: {
        type: Sequelize.DATE
    },
    lastRunDate: {
        type: Sequelize.DATE
    }
};

module.exports = db.sequelize.define('LastRunJob', schema);