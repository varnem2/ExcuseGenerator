'use strict';
module.exports = (sequelize, DataTypes) => {
  const WordName = sequelize.define('WordName', {
    word: DataTypes.STRING,
    wordType: DataTypes.STRING
  }, {});
  WordName.associate = function(models) {
    // associations can be defined here
  };
  return WordName;
};