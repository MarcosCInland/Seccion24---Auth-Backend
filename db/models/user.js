const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
    name: {
        type    : String,
        required: true
    },
    email: {
        type    : String,
        required: true,
        unique  : true
    },
    password: {
        type    : String,
        required: true
    }
})
//(nombre del modelo, schema)
module.exports = model('Usuario', usuarioSchema);