// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require("bcrypt");
const User = require('../../Model/user')

module.exports = {

    signUp : (req,res)=>{
        try{
            const userData = req.body;
            // eslint-disable-next-line no-console
            console.log(userData)
            User.findOne({
                $or: [
                  { email: userData.email },
                  { phone: userData.phone },
                ],
              }).then(async (result) => {
                if (result) {
                  res.json({ error: "User Already Exist" });
                } 
                else{
                    const salt = await bcrypt.genSalt(10);
                    // now we set user password to hashed password
                    userData.password = await bcrypt.hash(userData.password, salt);
                    const newUser = new User({
                      username: userData.username,
                      email: userData.email,
                      phone: userData.phone,
                      password: userData.password,
                    });
                    newUser.save().then(() => {
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