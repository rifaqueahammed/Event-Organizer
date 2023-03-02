const ServiceProvider = require('../../Model/serviceprovider')

module.exports = {

    joinRequests : (req,res) =>{
        try{
            ServiceProvider.find({isVerified:false}).then((result)=>{
               res.json(result);
            })

        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }

    },
    
    serviceProvidersList : (req,res) =>{
        try{
            ServiceProvider.find({isVerified:true}).then((result)=>{
               res.json(result);
            })

        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }

    }
}