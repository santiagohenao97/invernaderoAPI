const express = require('express');
const app = express();
const cors = require("cors");

const routes = require('./routes/routes');
const riego = require('./routes/riego');
const recirculacion = require('./routes/recirculacion');
const humedad = require('./routes/humedad');
const temperatura = require('./routes/temperatura');
const temperaturaSustrato = require('./routes/temperaturaSustrato');
const volumenSustrato = require('./routes/volumenSustrato');
const conductividad = require('./routes/conductividad');
const ph = require('./routes/ph');

require('dotenv').config()

//Ajustes
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', routes);
app.use('/api/riego', riego);
app.use('/api/recirculacion', recirculacion);
app.use('/api/humedad', humedad);
app.use('/api/temperatura', temperatura);
app.use('/api/temperaturaSustrato', temperaturaSustrato);
app.use('/api/volumenSustrato', volumenSustrato);
app.use('/api/conductividad', conductividad);
app.use('/api/ph', ph);

app.get('/', (req, res)=>{
  res.send('Hola')
})

//Ajustes del servidor
app.listen(app.get('port'),()=>{
  console.clear()
  console.log(`servidor corriendo en el puerto ${app.get('port')}`);
})

