import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema(
  { 
    
    quantity:{
        type:String
    }   
  },
  { timestamps: true }
);

export const ProductInventory = mongoose.model('ProductInventory', inventorySchema);
