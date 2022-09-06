const express = require('express');

//Crear servidor / aplicacion de express
const app = express();

// GET
app.get('/', (req, res) => { 
    res.json({
        ok: true,
        msg: 'Ok',
        uid: 1234
    })
});

app.listen(4000, () =>{
    console.log(`Servidor corriendo en puerto ${4000}`)
});