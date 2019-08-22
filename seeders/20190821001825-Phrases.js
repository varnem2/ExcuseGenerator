'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Phrases', [
      {
        phrase: "I need to work from home today because I need to <verb> my <noun>.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Phrases',
      {
        phrase: {
          [Sequelize.Op.or]: [
            {phrase: "I need to work from home today because I need to <verb> my <noun>."}
          ]
        }
      }, {});
  }
};
