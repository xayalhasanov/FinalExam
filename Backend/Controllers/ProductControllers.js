import { ProductModel } from "../Models/Productmodel.js"








export const ProductControllers={

    GetAll:async (req,res)=>{

        let products=await ProductModel.find()

        res.send(products)
    },
    GetById:async (req,res)=>{

        let {id}=req.params

        let product=await ProductModel.findById(id)

        res.send({
            message:"success GetById",
        data:product
        })
    },
    Deleteproduct:async (req,res)=>{

        let {id}=req.params

        await ProductModel.findByIdAndDelete(id)

        res.send({
            message:"success Delete",
       
        })
    },
    Postproduct:async (req,res)=>{

     

        let postproduct=await ProductModel(req.body)

        await postproduct.save()

        res.send({
            message:"success Post",
        data:req.body
        })
    }
}