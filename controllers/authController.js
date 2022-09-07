const { response } = require('express');
const Usuario = require('../db/models/user');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    const { email, name, password }  = (req.body);

    try {
        //  Validaciones
        //  1. email unico
        const usuario = await Usuario.findOne({
            email
        });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }
        const newUser = new Usuario(req.body);
        //  2. Encriptar password
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);
        //  3. Generar JWT
        const token = await generarJWT(newUser.id, name);
        //  4. Crear usuario
        await newUser.save();
        //  5. Response
        return res.status(201).json({
            ok: true,
            uid: newUser.id,
            msg: 'Usuario Creado',
            token
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
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