const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

//  CONTROLLER
const { crearUsuario, login, renovarToken } = require('../controllers/auth.controller');

//Login
router.post('/',                                                //route
    [   check('email', 'Email obligatorio').isEmail(),          //middlewares
        check('password', 'Password obligatoria').notEmpty()],  
    login                                                       //controllerFunction
);

//Crear usuario
router.post('/new',
    [   check('name', 'Nombre obligatorio').notEmpty(),
        check('email', 'Email obligatorio').notEmpty(),
        check('password', 'Password obligatoria').isLength({min: 6}) ],
    crearUsuario
);

//Renovar token
router.get('/renew', 
    renovarToken
);

//Exportar objetos
module.exports = router;