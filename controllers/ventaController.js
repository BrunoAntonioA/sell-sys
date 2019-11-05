const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Venta } = require('../models/venta');

// => localhost:3000/ingredientes/
router.get('/', (req,res) => {
    Venta.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving venta :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req,res) =>{
    console.log(req.param.id);
    if(!ObjectId.isValid(req.params.id)){
        console.log('id isnt valid');
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    
    Venta.findById(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving venta :' + JSON.stringify(err, undefined, 2)); }
        res.end(doc);
    });
    
});

router.post('/', (req,res) =>{
    var venta = new Venta({
        nombre: req.body.nombre,
        observacion: "",
        pagoDebito: "",
        pagoCredito: "",
        pagoEfectivo: "",
        idVendedor: req.body.idVendedor,
        idCliente: req.body.idCliente,
        fechaCreacion: new Date(),
        activa: true,
        monto: "",
        productos: []
    });
    venta.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in venta Save:' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {

    console.log('entra al router put');

    if(!ObjectId.isValid(req.params.id)){
        console.log('not updated invalid id') ;
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    
    var venta = new Venta({
        _id: req.params.id,
        nombre: req.body.nombre,
        observacion: req.body.observacion,
        pagoDebito: 0,
        pagoCredito: 0,
        pagoEfectivo: 0,
        idVendedor: req.body.idVendedor,
        idCliente: req.body.idCliente,
        fechaCreacion: req.body.fechaCreacion,
        activa: req.body.activa,
        productos: req.body.productos
    });
    Venta.findByIdAndUpdate(req.params.id, { $set: venta}, { new: true }, (err,doc) =>{
        if (!err) { 
            console.log('updated') ;
            res.send(doc);
        }
        else { console.log('Error in venta Update:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Venta.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in venta Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;