
var express = require('express');
var path = require('path')
var {engine} = require('express-handlebars')
const db = require('./database');
const { resolve } = require('path');
var app = express();
app.engine('hbs',engine({extname:'hbs',defaultLayout:'default', layoutsDir: path.join(__dirname, '/views/layouts'),partialsDir:path.join(__dirname, 'views/partials')}))

app.set('views', path.join(__dirname, 'views'));    
app.set('view engine','hbs') 

app.get('/user',(req,res)=>{
    res.render('layouts/user')
})
app.get('/',async(req,res)=>{
 
   
  let data = await getdata()
  res.render('layouts/home',{data:data})
  console.log(data)    
   
})


function getdata(){

    return new Promise(async(resolve,reject)=>{
        try{
        await db.get().collection('userinfo').findOne({name:'akhil U Nair'}).then((response)=>{
           if(response){
               resolve(response)
           }else{
            reject()
           }
        })
       }catch((err)=>{
          console.log(err)
       })
   })

}
const PORT = 3000  || process.env.PORT
app.listen(PORT)
