const express = require('express');

const router = express.Router();
const signUpController = require('../Controller/User/signUp');
const loginController = require('../Controller/User/Login');
const VerifyUser = require('../Middlewares/Authorization');
const homepageController = require('../Controller/User/Homepage')


router.post('/signUp',signUpController.signUp);
router.post('/login',loginController.userLogin);
router.get('/userhome/:id',VerifyUser.verify,homepageController.gethomepage)


module.exports = router;