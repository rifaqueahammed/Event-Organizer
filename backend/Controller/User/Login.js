// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require("bcrypt")
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const User = require('../../Model/user')
require('dotenv').config();


module.exports = {
    userLogin:async(req,res)=>{
        try{
         const user = await User.findOne({ email: req.body.email });
        if (user) {
              const validPassword = await bcrypt.compare(
              req.body.password,
              user.password);

        if (validPassword) {
            if (user.isBlocked) {
             res.json({error:"User is Blocked"});
            } else {
              const payLoad = {
                id: mongoose.Types.ObjectId(user.id),
                email: user.email,
                username: user.username
              }
              const jwtSecretKey = process.env.JWT_SECRET_KEY;
              const token = jwt.sign(payLoad,jwtSecretKey,{ expiresIn: 86400 });
              res.json({auth:true,payLoad,token:`Bearer ${token}`,});
           }
       } else {
          res.json({error:"Wrong password"});
      }
      } else {
        res.json({error:"Invalid email"});
      }
        }catch{
            // eslint-disable-next-line no-console
            console.log('error');
        }
    },
}