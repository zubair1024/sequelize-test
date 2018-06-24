const Sequelize = require("sequelize");
/**
 * ARRAYS NOT SUPPORTED IN MSSQL
 * TODO: Add arrays to schema
 */
const schema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    objectType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        defaultValue: 'Project'
    },
    pState: Sequelize.DOUBLE,
    assets: [{
        type: Schema.Types.ObjectId,
        ref: 'Asset'
    }],
    tags: [],
  
    // events: [{ type: Schema.Types.ObjectId, ref: 'SensorMessageEvent' }]
};