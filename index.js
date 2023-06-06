let dotnev =require('dotenv').config()
let express = require('express')

let app = express()

let mongoose = require("mongoose")

let cors = require("cors")



app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
        .then(()=>console.log("mongosse connected"))
        .catch(err=> console.log(err.message))

        
let Route = require("./Route")

app.use(express.json())




app.use(Route)


let prot = process.env.Port




app.listen(prot?prot:3000,()=>{
    console.log("server is running at 5000")
})