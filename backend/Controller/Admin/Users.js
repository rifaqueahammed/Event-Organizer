
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
    }
}