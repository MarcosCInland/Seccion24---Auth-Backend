const { Router } = require('express');

const router = Router();

//  CONTROLLER
const { crearUsuario, login, renovarToken } = require('../controllers/auth.controller');

//Login
router.post('/', 
    login
);

//Crear usuario
router.post('/new', 
    crearUsuario
);

//Renovar token
router.get('/renew', 
    renovarToken
);

//Exportar objetos
module.exports = router;