let express = require("express")



let mongoose = require("mongoose")

let Route = express.Router()

let Product = require("./Shema")







Route.post("/post",async(req,res)=>{
    try {
        let product = new Product(req.body);
    let save =await product.save() 
     res.status(201).json(save)
    } catch (error) {
        res.status(400).json({message:"server error"})
    }
})


Route.get("/all",async(req,res)=>{
    try {
        
        let result = await Product.find()
        res.status(200).json({message:result})
    } catch (error) {
        res.status(200).json({message:error.message})  
    }
})



Route.get("/Active", async (req, res) => {
    try {
        let product = new Product()
      let result = await product.findActive(); // Call findhp method on the Product model
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  });
  


//  params get https://localhost:5000/id
//  quatry get https://localhost:5000/?id=1234&title=text

Route.get("/:id",async(req,res)=>{
    try {
      
        let result = await Product.findOne({_id:req.params.id})
        res.status(200).json(result)
    } catch (error) {
        res.status(200).json({message:error.message})  
    }
})


Route.put("/put/:id",async(req,res)=>{
    try {
        let obj = req.body
        let result = await Product.updateOne({id:req.params.id}, {$set :{title:req.body.title,des:req.body.des,status:req.body.status}})
        res.status(200).json({message:obj})
       
    } catch (error) {
        res.status(200).json({message:error.message})  
    }
    
})


Route.delete("/:id",async(req,res)=>{
    try {
        let result = await Product.deleteOne({_id:req.params.id})
        res.status(200).json({message:"remove  it"})
    } catch (error) {
        res.status(200).json({message:error.message})  
    }
})


module.exports = Route