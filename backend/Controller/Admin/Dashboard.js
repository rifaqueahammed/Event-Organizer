/* eslint-disable no-console */
const User = require('../../Model/user');
const ServiceProvider = require('../../Model/serviceprovider');


module.exports = {
    getUserCounts:(req,res)=>{
        try{
         User.countDocuments({}, (err, count) => {
            if (err) {
              console.error(err);
            } else {
             const userCount = count;
             res.json(userCount);
            }});
         }catch(error){
            console.log(error);
          }
        },
    
    getServiceProviderCount:(req,res)=>{
      try{
      ServiceProvider.countDocuments({password:{ $exists: true }}, (err, count) => {
        if (err) {
            console.error(err);
        } else {
            const ServiceProviderCount = count;
            res.json(ServiceProviderCount)
          }});
      }catch(error){
          console.log(error);
        }
    },
    getPendingRequestCount:(req,res)=>{
      try{
        ServiceProvider.countDocuments({password:{ $exists: false }}, (err, count) => {
          if (err) {
            console.error(err);
          } else {
             const pendingRequestCount = count;
             res.json(pendingRequestCount);
          }});
      }catch(error){
          console.log(error);
      }
    }
}