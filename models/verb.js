'use strict';
module.exports = (sequelize, DataTypes) => {
  const Verb = sequelize.define('Verb', {
    word: DataTypes.STRING
  }, {});
  Verb.associate = function(models) {
    // associations can be defined here
  };
  return Verb;
};