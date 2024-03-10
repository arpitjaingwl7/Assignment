import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
   
    name: {
      required: true,
      type: String,
    },

    description: {
        required: true,
        type: String,
      },


    
  },
  { timestamps: true }
);

export const ProductCategory = mongoose.model('ProductCategory', categorySchema);
