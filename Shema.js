let mongoose = require("mongoose")

let ProductShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    des:String,
    status:String
    
 })

//  ProductShema.method={
//       findhp: function(){
//       return  new  mongoose.model("Product").find({title:"hp"})
//     }
// }


ProductShema.methods.findActive = async function() {
    return await mongoose.model('Product').find({ status:"active" });
  };
  

let Product = new  mongoose.model("Product",ProductShema);

 module.exports = Product