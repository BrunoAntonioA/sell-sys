const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');

var ingredienteController = require('./controllers/ingredienteController.js');
var productoController = require('./controllers/productoController.js');
var clienteController = require('./controllers/clienteController.js');
var ventaController = require('./controllers/ventaController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3020, () => console.log('Server started at port: 3020'));

app.use('/ingredientes', ingredienteController);
app.use('/productos', productoController);
app.use('/ventas', ventaController);
app.use('/clientes', clienteController);
