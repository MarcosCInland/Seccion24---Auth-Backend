const { Router } = require('express');

const router = Router();

//Login
router.post('/', (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Usuario loggeado'
    });
})

//Crear usuario
router.post('/new', (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Usuario creado'
    });
})

//Renovar token
router.get('/renew', (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Token renovado'
    });
})

//Exportar objetos
module.exports = router;