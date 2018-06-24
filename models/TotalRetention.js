const Sequelize = require("sequelize");


const schema = {
    objectType: {
        type: Sequelize.STRING,
        defaultValue: "TotalRetention",
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    coverPlansCancelledDelta: Sequelize.DOUBLE,
    coverPlansCancelledDifferenceDelta: Sequelize.DOUBLE,
    coverPlansCancelledNewValueDelta: Sequelize.DOUBLE,
    coverPlansCancelledOldValueDelta: Sequelize.DOUBLE,
    coverPlansSavedDelta: Sequelize.DOUBLE,
    coverPlansSavedDifferenceDelta: Sequelize.DOUBLE,
    coverPlansSavedNewValueDelta: Sequelize.DOUBLE,
    coverPlansSavedOldValueDelta: Sequelize.DOUBLE,
    retentionPendingCount: Sequelize.DOUBLE,
    retentionPendingValue: Sequelize.DOUBLE,
    retentionPendingCountDelta: Sequelize.DOUBLE,
    retentionPendingValueDelta: Sequelize.DOUBLE,
    etlDate: Sequelize.DATE,
    runDate: Sequelize.DATE,
};

module.exports=(db.sequelize.define('TotalRetention', schema));