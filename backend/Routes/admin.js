const express = require('express')

const router = express.Router();
const UserController = require('../Controller/Admin/Users')
const ServiceProviderController = require('../Controller/Admin/ServiceProviders')



router.get('/users',UserController.usersList);
router.get('/serviceProviders',ServiceProviderController.serviceProvidersList);
router.get('/joinRequests',ServiceProviderController.joinRequests);




module.exports = router;