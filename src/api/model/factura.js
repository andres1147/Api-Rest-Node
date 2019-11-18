'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Cliente = require('../model/cliente')

const FacturaSchema = new Schema({
    codigo: { type: String, required: true },
    fecha: { type: Date, required: true },
    clienteId: {type: Schema.Types.ObjectId, ref: Cliente, required: true}
});

module.exports = mongoose.model('Factura', FacturaSchema);