const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ServiceProvider = require('../../Model/serviceprovider')
const mailer = require('../../Middlewares/nodemailer')

module.exports = {
    verifyServiceProvider : (req,res)=>{
        try{
            ServiceProvider.updateOne({_id:req.params.id},{$set:{isVerified:true}}).then((result)=>{
                if(result){
                    res.json({success:true})
                }
            })
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
    },

    addPassword : async(req,res)=>{
    try{
       const id = mongoose.Types.ObjectId(req.body.serviceProvider);
       const salt = await bcrypt.genSalt(10);
       const password = await bcrypt.hash(req.body.password, salt);
       ServiceProvider.findOneAndUpdate({_id:id},{$set:{password}}).then((result)=>{
        if(result){
            const mailDetails = {
                from: process.env.NODMAILER_EMAIL,
                to: result.email,
                subject: 'Event Organizer Registration',
                html: `<p>${result.companyname} Welcome to Event Organizer ,Your Password For Event Organizer login is ${req.body.password}, you can change after login.</p>`,
              };
              mailer.mailTransporter.sendMail(mailDetails, (err) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.log(err);
                  }else {
                    res.json({success:true})
                   };
              });
            }
        })
    }catch{
        // eslint-disable-next-line no-console
        console.log('error')
    }
}
}
