const mongoose= require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref:"Product"
    },
    amount:Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    Date:{
        type:Number,
        default:new Date().toLocaleDateString()
    }
},{timestamps:true})

module.exports=mongoose.model("Order",orderSchema)//orders


