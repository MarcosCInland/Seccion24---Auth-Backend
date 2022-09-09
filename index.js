const express = require('express');

const cors = require('cors');
const { dbConnection } = require('./db/config');
const path = require('path');
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

//  Manejador de rutas para servir el front
app.get('*', (req, res)=>{
    req.sendFile( path.resolve(__dirname, 'public/index.html') )
});

app.listen( process.env.PORT , () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}...`)
});