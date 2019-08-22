'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WordNames', [
      {
        word: "run",
        wordType: "Verb",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        word: "cat",
        wordType: "Noun",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WordNames', 
    {
      word: {
        [Sequelize.Op.or]: [
          {word: "run"},
          {word: "cat"}
        ]
      }
    }, {});
  }
};
