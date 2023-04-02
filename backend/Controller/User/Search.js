const ServiceProvider = require('../../Model/serviceprovider');

module.exports = {
    getServiceProviders : async(req,res)=>{
      try{
        const ServiceProviders = await ServiceProvider.find({ services: { $elemMatch: {name:{$regex:req.body.service_name,$options:"i" }} } })
          if(ServiceProviders){
            res.json(ServiceProviders);
          }

      }catch(error){
        // eslint-disable-next-line no-console
        console.log(error)
      }
     
    }
}