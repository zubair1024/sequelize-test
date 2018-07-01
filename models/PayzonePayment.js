const Sequelize = require('sequelize');

const schema = {
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "PayzonePayment",
        validate:{
            noEmpty:true
        }
    },
    amount: Sequelize.NUMBER,
    invoiceDate: Sequelize.DATE,
    etlDate: {
        type: Sequelize.DATE
    },
    runDate: {
        type: Sequelize.DATE
    }
};

module.exports=db.sequelize.define('PayzonePayment',schema);