const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    name:{
        type:String,
        required:true,
        unique:true
    },
		gender:{
            type:String,
            enum:["male","female","other"]
        },
		percentage:Number,
        batch: {
            type:ObjectId,
            ref:"Batch"
        }


}, { timestamps: true });

module.exports = mongoose.model('developer', developerSchema)//developers
