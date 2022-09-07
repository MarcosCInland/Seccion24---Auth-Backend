const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) =>{
    const payload = { uid, name };
    
    return new Promise( (success, failure) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                failure(err);
            } else {
                success(token);
            }
        });
    } )
}

module.exports = {
    generarJWT
}