const ServiceProvider = require('../../Model/serviceprovider');

module.exports = {

    refreshServiceProvider : (req,res)=>{
        try{
            ServiceProvider.findOne({_id:req.id}).then((result)=>{
            if(result){
                const serviceProvider = {
                    id:req.id,
                    email:result.email,
                    companyname:result.companyname
                  };
              res.json(serviceProvider);
            }
         })
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }
    } 
}