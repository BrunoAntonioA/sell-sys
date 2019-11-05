const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Ingrediente } = require('../models/ingrediente');

// => localhost:3000/ingredientes/
router.get('/', (req,res) => {
    Ingrediente.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving Ingrediente :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req,res) =>{
    console.log(req.param.id);
    if(!ObjectId.isValid(req.params.id)){
        console.log('id isnt valid');
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    
    Ingrediente.findById(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Ingrediente :' + JSON.stringify(err, undefined, 2)); }
        res.end(doc);
    });
    
});

router.post('/', (req,res) =>{
    var ingrediente = new Ingrediente({
        nombre: req.body.nombre,
        stock: req.body.stock,
        cantidad_stock: req.body.cantidad_stock,
        precio_compra: req.body.precio_compra
    });
    ingrediente.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in employee Save:' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    var ingrediente = {
        nombre: req.body.nombre,
        stock: req.body.stock,
        cantidad_stock: req.body.cantidad_stock,
        precio_compra: req.body.precio_compra
    };
    Ingrediente.findByIdAndUpdate( req.params.id, { $set: ingrediente}, { new: true }, (err,doc) =>{
        if (!err) { 
            console.log(' no hay erro y pasó el update');
            res.send(doc); 
        }
        else { console.log('Error in ingrediente Update:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Ingrediente.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in ingrediente Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;