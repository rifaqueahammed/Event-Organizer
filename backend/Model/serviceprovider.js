const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  companyname:{
     type:String,
     required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone:{
    type: Number,
    required:true,
    unique:true,
    min:10
  },
  password: {
    type: String,
  },
  isBlocked: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("serviceProvider", serviceProviderSchema);