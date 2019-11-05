const ListaIngredienteModel = mongoose.model({

    cantidadIngrediente: {
        type: Number
    },
    ingredienteId: 
      { type: mongoose.Schema.Types.ObjectId, ref: 'Ingrediente' 
    }
    
  });
  
  module.exports = { ListaIngredienteModel };