// mbti: DataTypes.STRING,
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'board',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING, unique: true },
      summary: { type: DataTypes.STRING, unique: true },
      nickname: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING },
      img_url: { type: DataTypes.STRING },
    },
    { timestamps: true }
  );
};
