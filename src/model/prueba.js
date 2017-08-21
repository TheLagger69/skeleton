const mongoose = require('./db')

const pruebaSchema = mongoose.Schema({
    hola: String
});

module.exports = mongoose.model("prueba",pruebaSchema);