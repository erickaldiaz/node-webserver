require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = 8080;

//handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//middlerware
//servidor de contenido estático

app.use( express.static('public') );

// app.get('/', function (req, res) {
//   res.send('Home page')
// })

// app.get('/Hola-mundo', function (req, res) {
//     res.send('hola mundo en la ruta hola mundo')
//   })

app.get('/', (req, res) =>  {
  res.render('home', {
    nombre: 'by Ericka',
    titulo: 'Curso de Node.js'
  })
})

app.get('/generic', (req, res) =>  {
  res.render('generic', {
    nombre: 'by Ericka',
    titulo: 'Curso de Node.js'
  })
})
app.get('/elements', (req, res) =>  {
  res.render('elements', {
    nombre: 'by Ericka',
    titulo: 'Curso de Node.js'
  })
})

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen( port, () => {
    console.log(`example app listenniing at http://localhost:${port}`)
} );

module.exports = app;