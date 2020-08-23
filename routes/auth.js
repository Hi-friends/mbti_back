const express = require('express');
const router = express.Router();
const db = require('../models');
const authController = require('../controllers/auth');

//router.post('/writeBoard', authCheck, boardController.writeOne);
router.post('/join', authController.join);
router.post('/login', authController.login);
module.exports = router;
