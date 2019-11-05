const mongoose = require('mongoose');



var Venta = mongoose.model('Venta', {
    
    nombre: { type: String},
    observacion: { type: String},
    pagoDebito: { type: Number},
    pagoCredito: { type: Number},
    pagoEfectivo: { type: Number},
    idVendedor: { type: String},
    idCliente: { type: String},
    fechaCreacion: { type: Date},
    activa: { type: Boolean },
    monto: { type: Number},
    productos: [
        { 
            _id: String,
            _id_producto: String,
            cantidad_producto: Number

         }
      ]
});

module.exports = { Venta } ; 


/*
const ventaModel = mongoose.Schema({
    activa: {
        type: Boolean
    },
    nombre: { 
     type: String,
    },
    pagoDebito: {
        type: Number
    },
    pagoCreadito: {
        type: Number
    },
    pagoEfectivo: {
        type: Number
    },
    observacion: {
     type: String
    },
    idCliente: {
        type: String
    },
    idVendedor: {
     type: String
    },
    fechaCreacion: {
        type: Date
    },
    monto: {
        type: Number
    },
    productos: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'ListaProducto' }
    ]
  }
  );
  
  module.exports = mongoose.model('Venta', ventaModel);
  */