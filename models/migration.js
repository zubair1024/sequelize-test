module.exports={
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Person', {
            name: Sequelize.STRING,
            isBetaMember: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Person');
    }
}