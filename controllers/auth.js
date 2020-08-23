//아이디 중복검사
//닉네임 중복검사
//mbti 테이블에서 Foreign Key 가져오기
const jwt = require('jsonwebtoken');
const db = require('../models');
const bcrypt = require('bcrypt');
// const usernameDuplicateCheck = (req, res, next) => {};
const join = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const findUser = await db.User.findOne({ where: { username } });
    if (findUser) {
      const err = new Error('아이디 중복');
      return next(err);
    }
    const salt = bcrypt.genSaltSync(12);
    const hashPassword = bcrypt.hashSync(password, salt);
    const User = await db.User.create({
      ...req.body,
      password: hashPassword,
    });
    res.json({ User });
  } catch (err) {
    return next(err);
  }
};
const login = async (req, res, next) => {
  const { username, password } = req.body;
  const findUser = await db.User.findOne({ where: { username } });
  if (!findUser) {
    const err = new Error('아이디가 없다');
    return next(err);
  }
  if (bcrypt.compareSync(password, findUser.password)) {
    const payload = {
      iss: 'myDomain',
      username,
    };
    const option = {
      algorithm: 'HS256',
      expiresIn: 60 * 60 * 24 * 30,
    };
    jwt.sign(payload, process.env.JWT_SIGN, option, (err, token) => {
      if (err) return next(new Error('다시 로그인 해주세요'));
      res.cookie('ASDC', `Bearer ${token}`);
      res.status(200).json({ results: 'login success' });
    });
  } else {
    return next(new Error('비밀번호 틀림'));
  }
};

const authCheck = async (req, res, next) => {
  const authHeader = req.cookies['ASDC'];
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const { username } = jwt.verify(token, process.env.JWT_SIGN);
    const findUser = await db.User.findOne({ where: { username } });
    req.findUserId = findUser.id;
    next();
  } else {
    res.json({ results: '로그인하고오세요' });
  }
};

module.exports = { join, login, authCheck };
