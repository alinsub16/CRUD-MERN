const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema(
    {
        Fname:String,
        Age:Number,
        Address:String,
        Email:String
    }
    
)
const Member = mongoose.model('Member',MemberSchema);

module.exports = Member; 