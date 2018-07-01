const Sequelize = require('sequelize');

const schema = {
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "ETLJob",
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
    runDate: {
        type: Sequelize.DATE
    },
    completed: Sequelize.BOOLEAN
};

module.exports = db.sequelize.define('ETLJob', schema);