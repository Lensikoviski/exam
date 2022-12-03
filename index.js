
var express = require('express');
var path = require('path')
var {engine} = require('express-handlebars')
const db = require('./Database')





var app = express();


app.engine('hbs',engine({extname:'hbs',defaultLayout:'default', layoutsDir: path.join(__dirname, '/views/layouts'),partialsDir:path.join(__dirname, 'views/partials')}))

app.set('views', path.join(__dirname, 'views'));    
app.set('view engine','hbs') 

app.get('/',async(req,res)=>{
    let data = await db.get().collection('userinfo').findOne({name:"akhil U Nair"})
    res.render('layouts/home',{data:data})
})

app.listen(3000)
