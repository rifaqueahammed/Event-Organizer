// const bcrypt = require("bcrypt");
const ServiceProvider = require('../../Model/serviceprovider')

module.exports = {

    joinRequest : (req,res)=>{
        try{
            const ServiceProviderData = req.body;
            // eslint-disable-next-line no-console
            ServiceProvider.findOne({
                $or: [
                  { email: ServiceProviderData.email },
                  { phone: ServiceProviderData.phone },
                ],
              }).then(async (result) => {
                if (result) {
                  res.json({ error: "Service provider Already Exist" });
                } 
                else{
                    const newServiceProvider = new ServiceProvider({
                      companyname: ServiceProviderData.companyname,
                      email: ServiceProviderData.email,
                      phone:ServiceProviderData.phone
                    });
                    newServiceProvider.save().then(() => {
                      res.json({success:true});
                    });
                }
            })
        }
        catch{
            // eslint-disable-next-line no-console
            console.log('errror');
        }

    }

}