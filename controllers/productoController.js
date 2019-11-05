const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Producto } = require('../models/producto');

// => localhost:3000/productos/
router.get('/', (req,res) => {
    Producto.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving Producto :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    Producto.findById( req.params.id, (err,doc) => {
        if (!err) {
            res.send(doc); 
        }
        else { console.log('Error in Retriving Producto :' + JSON.stringify(err, undefined, 2)); }

    });
});

router.post('/', (req,res) =>{
    var producto = new Producto({
        nombre: req.body.nombre,
        stock: req.body.stock,
        precio: req.body.precio,
        cantidad_vendida: req.body.cantidad_vendida,
        ingredientes: req.body.ingredientes
    });
    producto.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in producto Save:' + JSON.stringify(err, undefined, 2));}
    });

});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
        var producto = new Producto({
            _id: req.params.id,
            nombre: req.body.nombre,
            stock: req.body.stock,
            precio: req.body.precio,
            cantidad_vendida: req.body.cantidad_vendida,
            ingredientes: req.body.ingredientes
        });

    Producto.findByIdAndUpdate( ObjectId(req.params.id), { $set: producto}, { new: true }, (err,doc) =>{
        if (!err) { res.send(doc); }
        else { 

            console.log('Error in producto Update:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Producto.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in producto Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
