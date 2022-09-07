const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No autorizado'
        })
    }
    
    try {
        //  VALIDACIONES
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED); //validar si fue firmado con dicha seed
        req.uid  = uid;
        req.name = name;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }
    //TODO ok
    next();
}
module.exports = {
    validarJWT
}