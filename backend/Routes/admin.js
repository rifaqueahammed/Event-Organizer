const express = require('express')

const router = express.Router();
const AdminLogin = require('../Controller/Admin/Login')
const UserController = require('../Controller/Admin/Users')
const ServiceProviderController = require('../Controller/Admin/ServiceProviders')
const verifyServiceProvider = require('../Controller/Admin/verifyServiceprovider')
const ControllServiceProvider = require('../Controller/Admin/controllServiceProvider')
const {verifyAdmin} = require('../Middlewares/Admin')


router.post('/login',AdminLogin.adminLogin);
router.get('/users',verifyAdmin,UserController.usersList);
router.get('/serviceProviders',verifyAdmin,ServiceProviderController.serviceProvidersList);
router.get('/joinRequests',verifyAdmin,ServiceProviderController.joinRequests);
router.patch('/verifyServiceProvider/:id',verifyAdmin,verifyServiceProvider.verifyServiceProvider);
router.delete('/deleteServiceProvider/:id',verifyAdmin,ControllServiceProvider.deleteServiceProvider);
router.patch('/addPassword',verifyAdmin,verifyServiceProvider.addPassword);
router.patch('/serviceProviderControll',verifyAdmin,ControllServiceProvider.controllServiceProvider);
router.patch('/userControll',verifyAdmin,UserController.usersControll);





module.exports = router;