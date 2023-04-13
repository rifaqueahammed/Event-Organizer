const express = require('express');

const router = express.Router();
const signUpController = require('../Controller/ServiceProvider/signUp');
const loginController = require('../Controller/ServiceProvider/Login');
const ProfileController = require('../Controller/ServiceProvider/Profile');
const ServiceController = require('../Controller/ServiceProvider/Services');
const VerifyServiceProvider = require('../Middlewares/Authorization');
const Refresh = require('../Controller/ServiceProvider/Refresh')
const upload = require('../Middlewares/Cloudinary');
const Reviews = require('../Controller/ServiceProvider/Reviews')

router.post('/joinrequest',signUpController.joinRequest);
router.post('/login',loginController.serviceProviderLogin);
router.get('/refreshServiceProvider',VerifyServiceProvider.verify,Refresh.refreshServiceProvider);
router.get('/profile',VerifyServiceProvider.verify,ProfileController.getprofile);
router.patch('/editprofile',VerifyServiceProvider.verify,upload.single('logo_image'),ProfileController.editProfile);
router.patch('/changePassword',VerifyServiceProvider.verify,ProfileController.changePassword);
router.post('/addService',VerifyServiceProvider.verify,upload.array('images',5),ServiceController.addService);
router.get('/getServices',VerifyServiceProvider.verify,ServiceController.getServices);
router.get('/getReviews',VerifyServiceProvider.verify,Reviews.getAllReviews);

module.exports = router;