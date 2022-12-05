
var express = require('express');
var path = require('path')
var {engine} = require('express-handlebars')
const db = require('./database')





var app = express();


app.engine('hbs',engine({extname:'hbs',defaultLayout:'default', layoutsDir: path.join(__dirname, '/views/layouts'),partialsDir:path.join(__dirname, 'views/partials')}))

app.set('views', path.join(__dirname, 'views'));    
app.set('view engine','hbs') 

app.get('/user',(req,res)=>{
    res.render('layouts')
})

app.get('/home',async(req,res)=>{
    await db.get().collection('userinfo').findOne({name:"akhil U Nair"}).then((data)=>{
        if(data){
            res.render('layouts/home',{data:data})
        }
    }).catch((err)=>{
        res.send("An error occured")
        console.log(err)
    })
   
})

const PORT = 3000  || process.env.PORT

app.listen(PORT)
