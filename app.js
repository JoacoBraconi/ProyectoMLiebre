const express = require('express');
const path = require('path');
const { send } = require('process');

const app = express();

app.use(express.static('public'))

app.get('/mercadoLiebre',(req,res) =>{
    res.sendFile(path.join(__dirname,'/views/html/home.html'))
});

app.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname,'/views/html/register.html'))
});

app.get('/login',(req,res) =>{
<<<<<<< HEAD:ML/app.js
    res.sendFile(path.join(__dirname,'views/html/login.html'))
=======
    res.sendFile(path.join(__dirname,'/views/html/login.html'))
>>>>>>> d7d5e1bbab621a5b6c158951a3231e207e5541d5:ML/src/app.js
});

app.listen(3000, () =>{
    console.log('Servidor corriendo en el puerto 3000')
});
