const { response } = require('express');
const { validationResult } = require('express-validator');

//  Middleware: funcion
const validarCampos = (req, res = response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    //  next = funcion que se ejecuta cuando todo funciona correctamente
    next();
}

module.exports = {
    validarCampos
}