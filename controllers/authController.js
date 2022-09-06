const { response } = require('express');

const crearUsuario = (req, res = response) => {

    const { email, name, password }  = (req.body);

    return res.json({
        ok: true,
        msg: 'Usuario creado'
    });
}

const login = (req, res = response) => {

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