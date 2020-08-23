require('dotenv').config({
  path: `${__dirname}/config/${process.env.NODE_ENV}.env`,
});
const init = () => {
  const titles = [
    'INFP',
    'ENFP',
    'INFJ',
    'ENFJ',
    'INTJ',
    'ENTJ',
    'INTP',
    'ENTP',
    'ISFP',
    'ESFP',
    'ISTP',
    'ESTP',
    'ISFJ',
    'ESFJ',
    'ISTJ',
    'ESTJ',
  ];
  titles.forEach((v, k) => {
    //foreach
    //map
    //filter
    db.Mbti.create({
      id: k,
      title: v,
    });
  });
};

const register = () => {
  const bcrypt = require('bcrypt');
  const salt = bcrypt.genSaltSync(12);
  const hashPassword = bcrypt.hashSync('aaaaaaa', salt);
  const usernames = ['a', 'b', 'c', 'd', 'e'];
  const nicknames = ['n_a', 'n_b', 'n_c', 'n_d', 'n_e'];
  const mbtiTitles = [1, 2, 1, 1, 3];
  usernames.forEach((v, k) => {
    db.User.create({
      username: v,
      nickname: nicknames[k],
      password: hashPassword,
      region: 'seoul',
      age: 20,
      sex: 'M',
      mbti_title: mbtiTitles[k],
    });
  });
};
const express = require('express');
const router = require('./routes');
const path = require('path');
const db = require('./models');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
// db.sequelize.sync({ force: true });
db.sequelize.sync();
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use((req, res, next) => {
  // 404
  const err = new Error('Not Found');
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ result: err.message });
});

// init();

// register();

app.listen(4000, () => {
  console.log('Express server');
});
