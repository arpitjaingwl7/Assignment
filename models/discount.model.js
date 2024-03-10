import mongoose from "mongoose"

const discountSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,

    },
    desc:{
        type:String,
        required:true,
    },
    discount_percent:{
        type:Number
    },
    active:{
        type:Boolean
    }


},{timestamps:true})


export const Discount=mongoose.model("Discount",discountSchema)


