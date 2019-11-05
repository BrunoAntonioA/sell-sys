var ListaProductoModel = mongoose.model({
    
    cantidadProducto: {
        type: Number
    },
    productoId: {
       type: mongoose.Schema.Types.ObjectId, ref: 'Producto' 
    }
  });
  
  module.exports = { ListaProductoModel };