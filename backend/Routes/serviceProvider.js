const express = require('express')

const router = express.Router();
const signUpController = require('../Controller/ServiceProvider/signUp')
const loginController = require('../Controller/ServiceProvider/Login')

router.post('/joinrequest',signUpController.joinRequest);
router.post('/login',loginController.userLogin);


module.exports = router;