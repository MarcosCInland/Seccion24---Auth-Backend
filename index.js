const express = require('express');

const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

//Crear servidor / aplicacion de express
const app = express();

//  DB Connection
dbConnection();

//  CORS
app.use( cors() );
//  Directorio publico
app.use( express.static('public') );
//  Lectura y parseo del body
app.use( express.json() );

//  Routes - middleware
app.use('/api/auth', require('./routes/authRoutes'));

app.listen( process.env.PORT , () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}...`)
});