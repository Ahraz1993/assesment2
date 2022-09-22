
const { default: mongoose } = require("mongoose");
const recommendationSchema=mongoose.Schema({
    compname : String,
    jobtitle : String,
    jobduration : String,
    projectsdone : Number
    
    
   })
const recommendationDetails=new mongoose.model("RecommendationDetails",recommendationSchema);
module.exports=recommendationDetails;