const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    const { email, name, password }  = (req.body);

    return res.json({
        ok: true,
        msg: 'Usuario creado'
    });
}

const login = (req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    const { email, password }  = (req.body);

    return res.json({
        ok: true,
        msg: 'Usuario loggeado'
    });
}

const renovarToken = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Token renovado'
    });
}

module.exports = {
    crearUsuario,
    login,
    renovarToken
}