const Sequelize = require('sequelize');

var schema = {
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "AwaitingInceptionByDate",
        validate:{
            noEmpty:true
        }
    },
    toBeInceptedCountMonthly: Sequelize.DOUBLE,
    toBeInceptedCountYearly: Sequelize.DOUBLE,
    toBeInceptedValueMonthly: Sequelize.DOUBLE,
    toBeInceptedValueYearly: Sequelize.DOUBLE,
    inceptionDate: Sequelize.DATE,
    etlDate: Sequelize.DATE,
    runDate: Sequelize.DATE
};

module.exports=db.sequelize.define('AwaitingInceptionByDate',schema);