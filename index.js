const express = require('express');

//Crear servidor / aplicacion de express
const app = express();

// Routes - middleware
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () =>{
    console.log(`Servidor corriendo en puerto ${4000}...`)
});