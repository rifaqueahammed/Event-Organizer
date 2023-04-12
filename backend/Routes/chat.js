const express = require('express');

const router = express.Router();
const Verify = require('../Middlewares/Authorization');
const ChatController = require('../Controller/Chat/Chat');

router.post('/addNewConversation',Verify.verify,ChatController.addNewConversation);
router.get('/getConversations/:id',Verify.verify,ChatController.getConversations);
router.get('/getServiceProvider/:id',Verify.verify,ChatController.getServiceProvider);
router.post('/addMessage',Verify.verify,ChatController.addMessage);
router.get('/getMessages/:id',Verify.verify,ChatController.getMessages);
router.get('/getUser/:id',Verify.verify,ChatController.getUser);



module.exports = router;