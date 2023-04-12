const mongoose = require("mongoose");
const Conversation = require('../../Model/conversation');
const ServiceProvider = require('../../Model/serviceprovider');
const Messages = require('../../Model/Messages');
const User = require('../../Model/user')

module.exports = {

   addNewConversation :async(req,res)=>{
    try{
    const conversation = await Conversation.findOne({
      members:{$all:[req.body.sender,req.body.receiver]}
    });
    if(conversation === null){
      const newConservation = new Conversation({
        members:[req.body.sender,req.body.receiver] 
      });
      await newConservation.save().then((response)=>{
        if(response)
        {res.json({sucess:true});}
      });
    }
   }catch(error){
       // eslint-disable-next-line no-console
       console.log(error) ;
    }
   },

   addMessage :async(req,res)=>{
    try{
        const newMessage = new Messages({
          message: req.body.text,
          senderId: req.body.sender,
          receiverId: req.body.receiver,
          conversationId: req.body.conversationId
        });
        newMessage.save().then((response)=>{
          res.json(response);
        })

   }catch(error){
       // eslint-disable-next-line no-console
       console.log(error) ;
    }
   },
   
   getConversations :async(req,res)=>{
      try{
      const conversation = await Conversation.find({
        members:{$in:[req.params.id]}
      });
       res.json({success:true,conversation})
     }catch(error){
         // eslint-disable-next-line no-console
         console.log(error) ;
      }
     },

     getServiceProvider :async(req,res)=>{
      try{
       const serviceProvider = await ServiceProvider.findOne({_id:req.params.id});
       if(serviceProvider){
        const data = {
          companyname:serviceProvider.companyname,
          logo_image: serviceProvider.logo_image.path
        }
        res.json(data);
       }
      }catch(error){
         // eslint-disable-next-line no-console
         console.log(error) ;
      }
     },

     getUser :async(req,res)=>{
      try{
       const user = await User.findOne({_id:req.params.id});
       if(user){
        const data = {
          username:user.username,
        }
        res.json(data);
       }
      }catch(error){
         // eslint-disable-next-line no-console
         console.log(error) ;
      }
     },

     getMessages :async(req,res)=>{
      try{
       const  conversationID = mongoose.Types.ObjectId(req.params.id);
        const allMessages = await Messages.find({conversationId:conversationID});
        if(allMessages){
          res.json(allMessages);
        }
       }catch(error){
         // eslint-disable-next-line no-console
         console.log(error) ;
      }
     },


}