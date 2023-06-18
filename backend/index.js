const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers')
const app = express()
const port = 3000
const routes = require('./routes');

app.use(bodyParser.json())

app.get('/', (req,res) => res.send('Olá mundo'))
app.use(routes);

app.listen(port,console.log("listening..."))