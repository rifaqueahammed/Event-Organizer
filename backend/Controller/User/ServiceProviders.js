const ServiceProvider = require('../../Model/serviceprovider');

module.exports = {
    getServiceProviderDetails:(req,res)=>{
        try{
            ServiceProvider.findOne({_id:req.params.id}).then((result)=>{
               if(result){
                const data = {
                    // eslint-disable-next-line no-underscore-dangle
                    id:result._id,
                    companyname:result.companyname,
                    email:result.email,
                    phone:result.phone,
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
        }catch(error){
         // eslint-disable-next-line no-console
         console.log(error)
        }
    }
}