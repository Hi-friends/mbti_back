const Sequelize = require('sequelize');
// const config = {
//   username: 'root', // user name
//   password: 'Soulmate428', // password
//   database: 'mbti', // schema name
//   host: '127.0.0.1', // db address
//   dialect: 'mysql', // database type
//   operatorsAliases: false,
//   port: 3306,
// };
const config = {
  username: process.env.DB_USERNAME, // user name
  password: process.env.DB_PASSWORD, // password
  database: process.env.DB_DBNAME, // schema name
  host: process.env.DB_HOST, // db address
  dialect: 'mysql', // database type
  operatorsAliases: false,
  port: process.env.DB_PORT,
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
  host: config.host,
  port: config.port,
});

const User = require('./User')(sequelize, Sequelize);
const Mbti = require('./Mbti')(sequelize, Sequelize);
const MbtiPoint = require('./MbtiPoint')(sequelize, Sequelize);
const Board = require('./Board')(sequelize, Sequelize);
// const Test = require('./Test')(sequelize, Sequelize);

User.belongsTo(Mbti, { foreignKey: 'mbti_title', sourceKey: 'id' });
Mbti.hasMany(MbtiPoint, { foreignKey: 'main', sourceKey: 'id' });
Mbti.hasMany(MbtiPoint, { foreignKey: 'target', sourceKey: 'id' });
Mbti.hasMany(Board, { foreignKey: 'mbti', sourceKey: 'id' });
// User.hasOne(Mbti);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Mbti = Mbti;
db.MbtiPoint = MbtiPoint;
db.Board = Board;
// db.Test = Test;

module.exports = db;
