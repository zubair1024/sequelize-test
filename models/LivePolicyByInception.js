const Sequelize = require("sequelize");

const schema = {
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "LivePolicyByInception",
        validate: {
            notEmpty: true
        }
    },
    inceptedCountMonthly: Sequelize.DOUBLE,
    inceptedCountYearly: Sequelize.DOUBLE,
    inceptedValueMonthly: Sequelize.DOUBLE,
    inceptedValueYearly: Sequelize.DOUBLE,
    toBeInceptedCountMonthly: Sequelize.DOUBLE,
    toBeInceptedCountYearly: Sequelize.DOUBLE,
    toBeInceptedValueMonthly: Sequelize.DOUBLE,
    toBeInceptedValueYearly: Sequelize.DOUBLE,
    next30DaysPolicyCountMonthly: Sequelize.DOUBLE,
    next30DaysPolicyCountYearly: Sequelize.DOUBLE,
    next30DaysPolicyValueMonthly: Sequelize.DOUBLE,
    next30DaysPolicyValueYearly: Sequelize.DOUBLE,
    next60DaysPolicyCountMonthly: Sequelize.DOUBLE,
    next60DaysPolicyCountYearly: Sequelize.DOUBLE,
    next60DaysPolicyValueMonthly: Sequelize.DOUBLE,
    next60DaysPolicyValueYearly: Sequelize.DOUBLE,
    next7DaysPolicyCountMonthly: Sequelize.DOUBLE,
    next7DaysPolicyCountYearly: Sequelize.DOUBLE,
    next7DaysPolicyValueMonthly: Sequelize.DOUBLE,
    next7DaysPolicyValueYearly: Sequelize.DOUBLE,
    next90DaysPolicyCountMonthly: Sequelize.DOUBLE,
    next90DaysPolicyCountYearly: Sequelize.DOUBLE,
    next90DaysPolicyValueMonthly: Sequelize.DOUBLE,
    next90DaysPolicyValueYearly: Sequelize.DOUBLE,
    etlDate: Sequelize.DATE,
    runDate: Sequelize.DATE,
};

module.exports = db.sequelize.define('LivePolicyByInception', schema);