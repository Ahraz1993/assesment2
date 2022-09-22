
const { default: mongoose } = require("mongoose");
const personalSchema=mongoose.Schema({
    name : String,
    email : String,
    password:String,
    contactno : String,
    AGE : Number,
    GENDER : String,
    address : String,
    post: String,
    company : String,
    hobies : String,
    
   })
const personalDetails=new mongoose.model("PersonalDetails",personalSchema);
module.exports=personalDetails;