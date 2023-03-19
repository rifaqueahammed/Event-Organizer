const express = require('express')

const router = express.Router();
const signUpController = require('../Controller/ServiceProvider/signUp')
const loginController = require('../Controller/ServiceProvider/Login')
const ProfileController = require('../Controller/ServiceProvider/Profile')
const VerifyServiceProvider = require('../Middlewares/Authorization')

router.post('/joinrequest',signUpController.joinRequest);
router.post('/login',loginController.serviceProviderLogin);
router.get('/profile/:id',VerifyServiceProvider.verify,ProfileController.getprofile);
router.patch('/editprofile',VerifyServiceProvider.verify,ProfileController.editProfile);
router.patch('/changePassword',VerifyServiceProvider.verify,ProfileController.changePassword);

module.exports = router;