const User = require('../../Model/user');

module.exports = {

    userRefres : (req,res)=>{
        try{
         User.findOne({_id:req.id}).then((result)=>{
            if(result){
                const user = {
                    id:req.id,
                    email:result.email,
                    username:result.username
                  };
              res.json(user);
            }
         })
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }

    } 
}