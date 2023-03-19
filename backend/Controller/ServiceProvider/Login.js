const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const ServiceProvider = require('../../Model/serviceprovider')
require('dotenv').config();


module.exports = {
    serviceProviderLogin:async(req,res)=>{
        try{
         const serviceProvider = await ServiceProvider.findOne({ email: req.body.email });
        if (serviceProvider) {
              const validPassword = await bcrypt.compare(
              req.body.password,
              serviceProvider.password);

        if (validPassword) {
            if (serviceProvider.isBlocked) {
             res.json({error:" Service Provider is Blocked"});
            } else {
              const payLoad = {
                id: mongoose.Types.ObjectId(serviceProvider.id),
                email: serviceProvider.email,
                companyname:serviceProvider.companyname
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