const mongoose = require('mongoose');


var Ingrediente = mongoose.model('Ingrediente', {
    nombre: { type: String},
    stock: { type: Number},
    cantidad_stock: { type: String},
    precio_compra: { type: Number}
});

module.exports = { Ingrediente } ; 

/*
const ingredienteModel = mongoose.Schema({
    nombre: { 
     type: String,
    },
    stock: {
     type: Number
    },
    cantidad_stock: {
     type: String
    },
    precio_compra: {
        type: Number
    },
   
  });
  
module.exports = mongoose.model('Ingrediente', ingredienteModel);
*/
