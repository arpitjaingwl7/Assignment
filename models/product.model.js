import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,

    },
    desc:{
        type:String,
        required:true,
    },

    SKU:{
        type:String,
        required:true,
   
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductCategory',
        required:true
        
    },
    inventory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductInventory',
        required:true
        
    },
    price: {
      type: Number,
      default: 0,
    },
    discount_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Discount'

    },
    
    
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
