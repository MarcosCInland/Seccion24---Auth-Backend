const express = require('express');

const cors = require('cors');
require('dotenv').config();

//Crear servidor / aplicacion de express
const app = express();

//  CORS
app.use( cors() );
//  Directorio publico
app.use( express.static('public') );
//  Lectura y parseo del body
app.use( express.json() );

//  Routes - middleware
app.use('/api/auth', require('./routes/auth'));

app.listen( process.env.PORT , () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}...`)
});