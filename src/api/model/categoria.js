'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CategoriaSchema = new Schema({
    codigo: { type: String, unique: true, required: true },
    descripcion: { type: String, required: true }
})

module.exports = mongoose.model('Categoria', CategoriaSchema);
