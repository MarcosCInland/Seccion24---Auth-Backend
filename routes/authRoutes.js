const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

//  CONTROLLER
const { crearUsuario, login, renovarToken } = require('../controllers/authController');
//  MIDDLEWARES
const { validarCampos } = require('../middlewares/validar-campos');

//Login
router.post('/',                                                //route
    [   check('email', 'Email obligatorio').isEmail(),          //middlewares
        check('password', 'Password obligatoria').notEmpty(),
        validarCampos
    ],  
    login                                                       //controllerFunction
);

//Crear usuario
router.post('/new',
    [   check('name', 'Nombre obligatorio').notEmpty(),
        check('email', 'Email obligatorio').notEmpty(),
        check('password', 'Password obligatoria').isLength({min: 6}),
        validarCampos 
    ],
    crearUsuario
);

//Renovar token
router.get('/renew', 
    renovarToken
);

//Exportar objetos
module.exports = router;