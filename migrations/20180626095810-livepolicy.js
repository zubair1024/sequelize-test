'use strict',

module.exports = {
  up: (queryInterface, Sequelize) => {
    Promise.all([queryInterface.addColumn("LivePolicies", "2ndStageSaleCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "2ndStageSaleValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "bankingErrorCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "bankingErrorCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "bankingErrorValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "bankingErrorValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "cancelledCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "cancelledCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "cancelledValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "cancelledValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "liveCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "liveCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "liveValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "liveValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "onDemandCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "onDemandCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "onDemandValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "onDemandValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "preSaleCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "preSaleCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "preSaleValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "preSaleValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "renewalCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "renewalCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "renewalValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "renewalValueDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "staywarmCount", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "staywarmCountDelta", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "staywarmValue", {
        type: Sequelize.DOUBLE
      }),
      queryInterface.addColumn("LivePolicies", "staywarmValueDelta", {
        type: Sequelize.DOUBLE
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    Promise.all([queryInterface.removeColumn("LivePolicies", "2ndStageSaleCountDelta"),
      queryInterface.removeColumn("LivePolicies", "2ndStageSaleValueDelta"),
      queryInterface.removeColumn("LivePolicies", "bankingErrorCount"),
      queryInterface.removeColumn("LivePolicies", "bankingErrorCountDelta"),
      queryInterface.removeColumn("LivePolicies", "bankingErrorValue"),
      queryInterface.removeColumn("LivePolicies", "bankingErrorValueDelta"),
      queryInterface.removeColumn("LivePolicies", "cancelledCount"),
      queryInterface.removeColumn("LivePolicies", "cancelledCountDelta"),
      queryInterface.removeColumn("LivePolicies", "cancelledValue"),
      queryInterface.removeColumn("LivePolicies", "cancelledValueDelta"),
      queryInterface.removeColumn("LivePolicies", "liveCount"),
      queryInterface.removeColumn("LivePolicies", "liveCountDelta"),
      queryInterface.removeColumn("LivePolicies", "liveValue"),
      queryInterface.removeColumn("LivePolicies", "liveValueDelta"),
      queryInterface.removeColumn("LivePolicies", "onDemandCount"),
      queryInterface.removeColumn("LivePolicies", "onDemandCountDelta"),
      queryInterface.removeColumn("LivePolicies", "onDemandValue"),
      queryInterface.removeColumn("LivePolicies", "onDemandValueDelta"),
      queryInterface.removeColumn("LivePolicies", "preSaleCount"),
      queryInterface.removeColumn("LivePolicies", "preSaleCountDelta"),
      queryInterface.removeColumn("LivePolicies", "preSaleValue"),
      queryInterface.removeColumn("LivePolicies", "preSaleValueDelta"),
      queryInterface.removeColumn("LivePolicies", "renewalCount"),
      queryInterface.removeColumn("LivePolicies", "renewalCountDelta"),
      queryInterface.removeColumn("LivePolicies", "renewalValue"),
      queryInterface.removeColumn("LivePolicies", "renewalValueDelta"),
      queryInterface.removeColumn("LivePolicies", "staywarmCount"),
      queryInterface.removeColumn("LivePolicies", "staywarmCountDelta"),
      queryInterface.removeColumn("LivePolicies", "staywarmValue"),
      queryInterface.removeColumn("LivePolicies", "staywarmValueDelta")
    ]);
  }
};