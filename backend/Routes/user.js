const express = require('express');

const router = express.Router();
const signUpController = require('../Controller/User/signUp');
const loginController = require('../Controller/User/Login');
const VerifyUser = require('../Middlewares/Authorization');
const homepageController = require('../Controller/User/Homepage');
const SearchServiceProviders = require('../Controller/User/Search');
const ServiceProviders = require('../Controller/User/ServiceProviders');
const Refresh = require('../Controller/User/Refresh');
const Reviews = require('../Controller/ServiceProvider/Reviews');


router.post('/signUp',signUpController.signUp);
router.post('/verifyOtp',signUpController.verifyOtp);
router.post('/login',loginController.userLogin);
router.get('/userRefresh',VerifyUser.verify,Refresh.userRefres);
router.get('/userhome/:id',VerifyUser.verify,homepageController.gethomepage);
router.post('/search',SearchServiceProviders.getServiceProviders);
router.get('/serviceProviderDetails/:id',ServiceProviders.getServiceProviderDetails);
router.patch('/addReview',VerifyUser.verify,Reviews.addReview);
router.get('/getReviews/:id',Reviews.getReviews);


module.exports = router;