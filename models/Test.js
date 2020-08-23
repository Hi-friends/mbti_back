// mbti: DataTypes.STRING,
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      username: { type: DataTypes.STRING, unique: true },
      nickname: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      region: DataTypes.STRING,
      age: DataTypes.INTEGER,
      sex: DataTypes.STRING,
    },
    { timestamps: true }
  );
};
