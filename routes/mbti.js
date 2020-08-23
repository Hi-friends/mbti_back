const express = require('express');
const router = express.Router();
const db = require('../models');
const mbtiController = require('../controllers/mbti');
const { authCheck } = require('../controllers/auth');

//router.post('/writeBoard', authCheck, boardController.writeOne);
router.get('/same', authCheck, mbtiController.findSame);
//router.post('/login', authController.login);

module.exports = router;
