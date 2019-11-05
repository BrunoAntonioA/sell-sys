const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Cliente } = require('../models/cliente');

// => localhost:3000/clientes/
router.get('/', (req,res) => {
    Cliente.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving clientes :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req,res) =>{
    console.log(req.param.id);
    if(!ObjectId.isValid(req.params.id)){
        console.log('id isnt valid');
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    
    Cliente.findById(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Cliente :' + JSON.stringify(err, undefined, 2)); }
        res.end(doc);
    });
    
});

router.post('/', (req,res) =>{
    var cliente = new Cliente({
        nombre: req.body.nombre,
        correo: req.body.correo,
        rut: req.body.rut,
        fecha_inscripcion: req.body.fecha_inscripcion,
        fecha_cumple: req.body.fecha_cumple,
        ventas: req.body.ventas
    });
    cliente.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in cliente Save:' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    var cliente = new Cliente({
        _id: req.params.id,
        nombre: req.body.nombre,
        correo: req.body.correo,
        rut: req.body.rut,
        fecha_inscripcion: req.body.fecha_inscripcion,
        fecha_cumple: req.body.fecha_cumple,
        ventas: req.body.ventas
    });
    Cliente.findByIdAndUpdate(req.params.id, { $set: cliente}, { new: true }, (err,doc) =>{
        if (!err) { res.send(doc); }
        else { console.log('Error in cliente Update:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Cliente.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in cliente Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;