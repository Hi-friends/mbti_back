//아이디 중복검사
//닉네임 중복검사
//mbti 테이블에서 Foreign Key 가져오기
const db = require('../models');

const findSame = async (req, res, next) => {
  try {
    const userid = req.findUserId;
    console.log(userid);

    const findUser = await db.User.findOne({ where: { id: userid } });
    if (findUser) {
      findMbti = findUser.mbti_title;
    }
    console.log(findMbti);
    const users = await db.User.findAll({
      include: [{ model: db.Mbti, as: 'mbti' }],
      where: { mbti_title: findMbti },
    });
    console.log(users);
    res.json({ result: users });
    // const User = await db.User.create({
    //   ...req.body,
    //   password: hashPassword,
    // });
    // res.json({ User });
  } catch (err) {
    return next(err);
  }
};

module.exports = { findSame };
