const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ServiceProvider = require('../../Model/serviceprovider')

module.exports = {
    verifyServiceProvider : (req,res)=>{
        try{
            ServiceProvider.updateOne({_id:req.params.id},{$set:{isVerified:true}}).then((result)=>{
                if(result){
                    res.json({success:true})
                }
            })
            
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
    },

    addPassword : async(req,res)=>{
    try{
       const id = mongoose.Types.ObjectId(req.body.serviceProvider);
       const salt = await bcrypt.genSalt(10);
       const password = await bcrypt.hash(req.body.password, salt);
       ServiceProvider.updateOne({_id:id},{$set:{password}}).then((result)=>{
        if(result){
            res.json({success:true})
        }
       })
    }catch{
        // eslint-disable-next-line no-console
        console.log('error')
    }
}
}