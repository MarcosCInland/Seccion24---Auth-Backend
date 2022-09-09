const moongose = require("mongoose");

//  Connection to MONGODB
const dbConnection = async() => {
    try {
        await moongose.connect( process.env.BD_CNN, {
            useNewUrlParser     : true,
            useUnifiedTopology  : true
        } ); //useCreateIndex: true is not supported
        console.log('Connected to database')

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar BD');
    }
}

module.exports = {
    dbConnection
}