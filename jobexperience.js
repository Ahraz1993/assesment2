
const { default: mongoose } = require("mongoose");
const experienceSchema=mongoose.Schema({
    compname : String,
    jobtitle : String,
    jobduration : String,
    projectsdone : Number
    
    
   })
const experienceDetails=new mongoose.model("ExperienceDetails",experienceSchema);
module.exports=experienceDetails;