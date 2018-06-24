const Sequelize = require("sequelize");

const schema = {
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "TotalPayment",
        validate: {
            notEmpty: true
        }
    },
    amount: Sequelize.DOUBLE,
    dueDate: Sequelize.DATE,
    paymentOccurance: Sequelize.STRING,
    status: Sequelize.STRING,
    type: Sequelize.STRING,
    etlDate: Sequelize.DATE,
    runDate: Sequelize.DATE,
}

module.exports = db.sequelize.define('TotalPayment', schema);