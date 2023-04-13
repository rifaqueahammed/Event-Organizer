// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require("bcrypt");
const User = require('../../Model/user');
const  mailer = require('../../Middlewares/nodemailer');
const Otp = require('../../Model/otp');

module.exports = {

    signUp : (req,res)=>{
        try{
          console.log('hi')
            const userData = req.body;
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
                      const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;
                      const mailDetails = {
                        from: process.env.NODMAILER_EMAIL,
                        to: req.body.email,
                        subject: "Event Organizer OTP login",
                        html: `<p>Your OTP For Event Organizer login is ${OTP}</p>`,
                      };
                      mailer.mailTransporter.sendMail(mailDetails, (err) => {
                        if (err) {
                          // eslint-disable-next-line no-console
                          console.log(err);
                        } else {
                          const newOtp = new Otp({
                            otp: OTP,
                            email: req.body.email,
                          });
                          newOtp.save().then(() => {
                            res.json({ success:true });
                          });
                        }
                      });
                    });
                  }
                })
              }
        catch{
            // eslint-disable-next-line no-console
            console.log('errror');
          }
        },

        verifyOtp:(req,res)=>{
          try{
              Otp.findOne( {$and: [{ email: req.body.email },{ otp:req.body.otp }]}).then((result)=>{
               if(result){
                  User.updateOne({email: req.body.email},{$set:{isVeryfied:true}}).then((response)=>{
                  if(response){
                    res.json({success:true});
                  }
                })
               }else{
                User.deleteOne({ email: req.body.email}).then(()=>{
                  Otp.deleteOne({ email: req.body.email}).then(()=>{
                    res.json({error:'Wrong OTP'});
                  })
                })
               }
              })
          }catch(error){
            // eslint-disable-next-line no-console
            console.log(error)
          }
        }
      };