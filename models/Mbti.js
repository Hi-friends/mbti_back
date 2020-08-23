// mbti: DataTypes.STRING,
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mbti',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING },
    },
    { timestamps: true }
  );
};
