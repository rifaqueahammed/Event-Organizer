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
  licence_number:{
    type:String,
  },
  ownername:{
    type:String,
  },
  address :{
    line1:{
      type:String,
    },
    state:{
      type:String,
    },
    pincode:{
      type:Number,
    }
  },
  
  hq:{
      type:String,
    },
  locations :[
    {
      place:{
        type:String,
      }
    }
  ],

  logo_image: {
    name: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  
  date: {
    type: Date,
    default: Date.now,
  },

  services:[{
    name:{
      type:String
    },
    description:{
      type:String
    },
    images:[
      {
        filename:{
          type:String
        },
        path:{
          type:String
        }
      }
    ]
  }],

  reviews:[
    {
      userId:{
        type:mongoose.Schema.Types.ObjectId,
      },
      username:{
        type:String
      },
      review:{
        type:String
      },
      posted_at: {
        type: Date,
        default: Date.now,
      },
    }
  ],
    
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isVerified:{
    type: Boolean,
    default:false
  }
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("serviceProvider", serviceProviderSchema);