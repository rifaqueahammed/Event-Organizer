const ServiceProvider = require('../../Model/serviceprovider')

module.exports = {
    deleteServiceProvider : (req,res)=>{
        try{
            ServiceProvider.deleteOne({_id:req.params.id}).then((result)=>{
                if(result){
                    res.json({success:true})
                }
            })
            
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
    },

    controllServiceProvider : (req,res)=>{
        try{
            ServiceProvider.updateOne({_id:req.body.id},[
                {$set:{
                    isBlocked:{
                        $cond:{
                            if: { $eq: [ "$isBlocked", true ] },
                            then: false,
                            else: true
                        }
                    }
                }}
            ]).then((result)=>{
                if(result){
                    res.json({success:true});
                }
            })
            
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
    }
}