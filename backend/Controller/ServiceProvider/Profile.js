const bcrypt = require("bcrypt");
const ServiceProvider = require('../../Model/serviceprovider');

module.exports = {

    getprofile : (req,res)=>{
        try{
            ServiceProvider.findOne({_id:req.id}).then((result)=>{
               if(result){
                const data = {
                    // eslint-disable-next-line no-underscore-dangle
                    _id:result._id,
                    companyname:result.companyname,
                    email:result.email,
                    phone: result.phone,
                    licence_number:result.licence_number,
                    ownername:result.ownername,
                    hq:result.hq,
                    line1:result.address.line1,
                    state:result.address.state,
                    pincode:result.address.pincode,
                    logo_image:result.logo_image.path,
                    logo_image_name:result.logo_image.name,
                    services:result.services
                }
                res.json(data);
               }
            });
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }

    },
    
    editProfile : (req,res)=>{
        try{
            const imagePath = req?.file?.path ? req.file.path : req.body.logo_image;
            const imageName = req?.file?.filename ? req.file.filename : req.body.logo_image_name;
           // eslint-disable-next-line no-underscore-dangle
           ServiceProvider.findOneAndUpdate({_id:req.id},
            {$set:{
                licence_number:req.body.licence_number,
                companyname:req.body.companyname,
                phone:req.body.phone,
                ownername:req.body.ownername,
                hq:req.body.hq,
                address:{
                    line1:req.body.line1,
                    state:req.body.state,
                    pincode:req.body.pincode
                },
                logo_image:{
                    name:imageName,
                    path:imagePath,
                }
            }}).then((result)=>{
                if(result){
                    res.json({result,upadtaed:true});
                }
            })
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
    },

    changePassword : async(req,res)=>{
        try{
            const serviceProvider = await ServiceProvider.findOne({ _id:req.id });
            if (serviceProvider) {
                const validPassword = await bcrypt.compare(req.body.currentpassword,serviceProvider.password);
              if(validPassword){
                const salt = await bcrypt.genSalt(10);
                const newpassword = await bcrypt.hash(req.body.newpassword, salt);
                ServiceProvider.updateOne({ _id:req.id },{$set:{password:newpassword}}).then((result)=>{
                if(result){
                    res.json({updated:true});
                }
                })
              }
              else{
                res.json({error:'Enter Valid Password'})
              }
            }
        }catch{
            // eslint-disable-next-line no-console
            console.log('error');
        }
    },
}