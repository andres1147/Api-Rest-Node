'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Factura = require('../model/factura')
const Producto = require('../model/producto')

const VentaSchema = new Schema({
    codigo: { type: String, required: true },
    cantidad: { type: Number, required: true },
    facturaId: {type: Schema.Types.ObjectId, ref: Factura, required: true},
    productoId: {type: Schema.Types.ObjectId, ref: Producto, required: true}
});

module.exports = mongoose.model('Venta', VentaSchema);