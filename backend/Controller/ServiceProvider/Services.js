const ServiceProvider = require('../../Model/serviceprovider')

module.exports = {
    // checkService:(req,res,next)=>{
    //     try{
    //     const service = req.body.service_name;
    //      ServiceProvider.findOne({_id:req.id}).then((result)=>{
    //        console.log(result)
    //      })
    //     }catch{
    //         console.log('error')
    //     }
    // },
    addService:(req,res)=>{
        try{
            const newService = {
                name:req.body.service_name,
                description:req.body.description,
                images:req.files.map((f)=>({
                    filename:f.filename,
                    path:f.path,
                 }))
                }
            ServiceProvider.updateOne({_id:req.id},{$push:{services:newService}}).then((result)=>{
                if(result){
                    res.json({success:true})
                }
            }).catch((error)=>{
                // eslint-disable-next-line no-console
                console.log(error)
            })
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
       
    },
    getServices:(req,res)=>{
        try{
           ServiceProvider.findOne({_id:req.id}).then((result)=>{
            if(result){
             const {services} = result;
             res.json(services);
            }
           })
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
}