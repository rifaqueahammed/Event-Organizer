const User = require('../../Model/user')

module.exports = {
   gethomepage :(req,res)=>{
    try{
        const userId = req.params.id;
        User.findOne({_id:userId}).then((result)=>{
            if(result){
                res.json(result);
            }
        })
    }catch{
       console.log('error') 
    }
   }
}