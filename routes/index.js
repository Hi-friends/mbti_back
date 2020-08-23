const express = require('express');
const router = express.Router();
const auth = require('./auth');
const { authCheck } = require('../controllers/auth');
const mbti = require('./mbti');

router.get('/board', (req, res, next) => {
  res.json({
    result: '성공입니다',
  });
});

router.use('/auth', auth);

router.post('/board', (req, res, next) => {
  const title = req.body.title;
  res.json({
    result: title,
  });
});

router.use('/mbti', mbti);

module.exports = router;

// router.get('/', function (req, res, next) {
//   res.send('list of users');
// });

// router.get('/new', function (req, res, next) {
//   res.render('index', { title: 'Add User Form' });
// });

// router.get('/:id', function (req, res, next) {
//   res.send('a user. id: ' + req.params.id);
// });

// router.post('/', function (req, res, next) {
//   res.send('new user. name: ' + req.body.name);
// });

// router.get('/:id/edit', function (req, res, next) {
//   res.render('index', { title: 'Edit User Form' });
// });

// router.put('/:id', function (req, res, next) {
//   res.send('update a user. id: ' + req.params.id + ' , name: ' + req.body.name);
// });

// router.delete('/:id', function (req, res, next) {
//   res.send('delete a user. id: ' + req.params.id);
// });
