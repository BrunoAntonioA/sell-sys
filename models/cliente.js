const mongoose = require('mongoose');


var Cliente = mongoose.model('Cliente', {
    nombre: String,
    correo: String,
    rut: String,
    fecha_inscripcion: String,
    fecha_cumple: Date,
    ventas: []
});

module.exports = { Cliente } ; 


/*
const clienteModel = mongoose.Schema({
  nombre: { 
   type: String,
  },
  correo: {
   type: String
  },
  rut: {
   type: String
  },
  fecha_inscripcion: {
      type: Date
  },
  fecha_cumple: {
      type: Date
  },
  ventas: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Venta' }
  ]
});

module.exports = mongoose.model('Cliente', clienteModel);
*/