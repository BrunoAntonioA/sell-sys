const mongoose = require('mongoose');


var Ingrediente = mongoose.model('Ingrediente', {
    nombre: { type: String},
    stock: { type: Number},
    cantidad_stock: { type: String},
    precio_compra: { type: Number}
});

module.exports = { Ingrediente } ; 

