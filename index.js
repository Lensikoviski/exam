const express = require("express")
const app = express()
const zip = require("express-easy-zip")

app.use(zip())
const file = [
    {path:"./jayaram/file.c",name:"file.c"},
    {path:"./jayaram/new.c" ,name:"new.c"}
]
app.get('/',(req,res)=>{
    res.zip({files:file,filename:"jayaram.zip"})
})

app.listen(3000 || process.env.PORT)