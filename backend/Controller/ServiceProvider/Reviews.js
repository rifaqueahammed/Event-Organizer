const mongoose = require("mongoose");
const ServiceProvider = require('../../Model/serviceprovider');

module.exports = {
    addReview:(req,res)=>{
        try{
            const data = {
                userId:req.body.userId,
                review:req.body.review,
                username:req.body.username
            };
            ServiceProvider.findOneAndUpdate(
                {_id:req.body.serviceProviderId},{$push:{reviews:data}},{new: true} ).then(()=>{
                    ServiceProvider.aggregate([
                        { $match: { _id: mongoose.Types.ObjectId( req.body.serviceProviderId)} },
                        { $unwind: "$reviews" },
                        { $project : { _id : 0,'reviews.username' : 1, 'reviews.review' : 1, 'reviews.posted_at' : 1,} },
                        { $sort : { 'reviews.posted_at' : -1 } },
                    ]).then((result)=>{
                        res.json(result);
                    })
                });
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },

    getReviews:(req,res)=>{
       try{
        ServiceProvider.aggregate([
            { $match: { _id: mongoose.Types.ObjectId( req.params.id)} },
            { $unwind: "$reviews" },
            { $project : { _id : 0,'reviews.username' : 1, 'reviews.review' : 1, 'reviews.posted_at' : 1,} },
            { $sort : { 'reviews.posted_at' : -1 } },
        ]).then((result)=>{
            res.json(result);
        })
       }catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
       }
    },

    getAllReviews:(req,res)=>{
        try{
            ServiceProvider.aggregate([
                { $match: { _id: mongoose.Types.ObjectId( req.id)} },
                { $unwind: "$reviews" },
                { $project : { _id : 0,'reviews._id' : 1,'reviews.username' : 1, 'reviews.review' : 1, 'reviews.posted_at' : 1,} },
                { $sort : { 'reviews.posted_at' : -1 } },
            ]).then((result)=>{
                res.json(result);
            })
        }catch(error){
         // eslint-disable-next-line no-console
         console.log(error);
        }
     },

     deleteReview:(req,res)=>{
        try{
         ServiceProvider.updateOne({_id:req.id},{$pull:{reviews:{_id:req.params.id}}}).then((result)=>{
          if(result){
            res.json({success:true});
          }
         })
        }catch(error){
            // eslint-disable-next-line no-console
            console.log(error);
        }
     }

}