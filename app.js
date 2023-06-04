
const express = require('express')
var hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;



//HBS PARA RENDERIZAR UNA VISTA
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico 
app.use( express.static('Public'));

app.get('/', function (req, res) {
    res.render('home',{
        titulo:"CURSO DE NODE",
        nombre:"Erick David"
    });
});

app.get('/generic', function (req, res) {
    res.render('generic');
});

app.get('/elements', function (req, res) {
    res.render('elements');
});

  
app.listen(port, () => {
    console.log(`example app listening at htt_localhost:${port}`)
})
