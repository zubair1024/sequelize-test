const Sequelize = require("sequelize");
/**
 * TODO NotificationCache is an array. Handle arrays.
 */
const schema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        },
        defaultValue: "User"
    },
    pState: Sequelize.DOUBLE,
    loginName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        },
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "default.png"
    },
    //privileges: [],
    dob: Sequelize.STRING,
    phoneNo: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    //GUI controls
    timezone: {
        type: Sequelize.STRING,
        defaultValue: "Asia/Dubai"
    },
    dateTimeFormat: {
        type: Sequelize.STRING,
        defaultValue: "D/MM/YYYY h:mm:ss a"
    },
    dateFormat: {
        type: Sequelize.STRING,
        defaultValue: "D/MM/YYYY"
    },
    timeFormat: {
        type: Sequelize.STRING,
        defaultValue: "h:mm:ss a"
    },
    distance: Sequelize.STRING,
    temperature: Sequelize.STRING,
    speed: Sequelize.STRING,
    volume: Sequelize.STRING,
    pressure: Sequelize.STRING,
    // notificationCache: [{
    //     _asset: {
    //         type: Schema.Types.ObjectId,
    //         ref: "Asset"
    //     },
    //     name: Sequelize.STRING,
    //     triggerTime: Date,
    //     monitoredFeature: {},
    //     objectType: Sequelize.STRING
    // }],

};

module.exports = db.sequelize.define('User', schema);