const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema({
    conversationId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    message:{
        type:String,
    }
}, 
{
    timestamps: true,
}
  );

module.exports = mongoose.model("message", messageSchema);