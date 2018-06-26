const Sequelize = require("sequelize");

const schema={
    Foo: Sequelize.STRING,
    Bar: Sequelize.STRING
}

module.exports = db.sequelize.define('Foo', schema);
