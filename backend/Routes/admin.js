const express = require('express')

const router = express.Router();
const AdminLogin = require('../Controller/Admin/Login')
const UserController = require('../Controller/Admin/Users')
const ServiceProviderController = require('../Controller/Admin/ServiceProviders')
const verifyServiceProvider = require('../Controller/Admin/verifyServiceprovider')
const ControllServiceProvider = require('../Controller/Admin/controllServiceProvider')
const {verify} = require('../Middlewares/Authorization')


router.post('/login',AdminLogin.adminLogin);
router.get('/users',verify,UserController.usersList);
router.get('/serviceProviders',verify,ServiceProviderController.serviceProvidersList);
router.get('/joinRequests',verify,ServiceProviderController.joinRequests);
router.patch('/verifyServiceProvider/:id',verify,verifyServiceProvider.verifyServiceProvider);
router.delete('/deleteServiceProvider/:id',verify,ControllServiceProvider.deleteServiceProvider);
router.patch('/addPassword',verify,verifyServiceProvider.addPassword);
router.patch('/serviceProviderControll',verify,ControllServiceProvider.controllServiceProvider);
router.patch('/userControll',verify,UserController.usersControll);





module.exports = router;