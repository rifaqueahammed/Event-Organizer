const express = require('express')

const router = express.Router();
const signUpController = require('../Controller/User/signUp')
const loginController = require('../Controller/User/Login')

router.post('/signUp',signUpController.signUp);
router.post('/login',loginController.userLogin);


module.exports = router;