
const User = require('../../Model/user')

module.exports = {
    usersList : (req,res) =>{
        try{
            User.find().then((result)=>{
                res.json(result)
            })
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }
    },

    usersControll : (req,res) =>{
        try{
            User.findOneAndUpdate({_id:req.body.id},[
                {$set:{
                    isBlocked:{
                        $cond:{
                            if: { $eq: [ "$isBlocked", true ] },
                            then: false,
                            else: true
                        }
                    }
                }}
            ],{new: true}).then((result)=>{
                if(result){
                    const {isBlocked} = result;
                    res.json({success:true,isBlocked});
                }
            })
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
}