const mongoose = require('mongoose');


var Producto = mongoose.model('Producto', {
    nombre: { type: String},
    stock: {type: Number},
    precio: {type: Number},
    cantidad_vendida: {type: Number},
    ingredientes: [
        {
            _id: String,
            _id_ingrediente: String,
            cantidad_ingrediente: Number
        }

    ]
});
module.exports = { Producto } ; 


/*
const productoModel = mongoose.Schema({
    nombre: { 
     type: String,
    },
    stock: {
     type: Number
    },
    precio: {
     type: Number
    },
    cantidad_vendidas: {
        type: Number
    },
    ingredientes: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'ListaIngrediente' }
    ]
  });
  
  module.exports = mongoose.model('Producto', productoModel);
  
  */