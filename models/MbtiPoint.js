// mbti: DataTypes.STRING,
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mbtiPoint',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      point: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};
