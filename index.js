const express = require("express")
const app = express()
const zip = require("express-zip")

//app.use(zip())
const file = [
    {path:"./jayaram/file.c",name:"file.c"},
    {path:"./jayaram/new.c" ,name:"new.c"}
]
app.get('/',(req,res)=>{
    res.zip(file)
})

app.listen(3000 || process.env.PORT)