import { model, Schema } from "mongoose";







const   ProductShema=new Schema({

    name:String,
    price:Number,
    image:String,
})



export const ProductModel=model("products",ProductShema)