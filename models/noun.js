'use strict';
module.exports = (sequelize, DataTypes) => {
  const Noun = sequelize.define('Noun', {
    word: DataTypes.STRING
  }, {});
  Noun.associate = function(models) {
    // associations can be defined here
  };
  return Noun;
};