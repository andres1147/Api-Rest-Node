'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Categoria = require('../model/categoria')
const Proveedor = require('../model/proveedor')

const ProductoSchema = new Schema({
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoriaId: {type: Schema.Types.ObjectId, ref: Categoria, required: true},
    proveedorId: {type: Schema.Types.ObjectId, ref: Proveedor, required: true}
});

module.exports = mongoose.model('Producto', ProductoSchema);