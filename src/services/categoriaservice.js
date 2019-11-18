'use strict'
const mongoose = require('mongoose');
const Categoria = require('../api/model/categoria')
 
 
module.exports = {
    async getAllCategorias() {
      const categorias = await Categoria.find();
 
      return categorias;
    },
 
    async getCategoriaById(id) {
      const categoria = await Categoria.findById(id);
 
      return categoria;
    },

    async saveCategoria(categoriareq) {
        const categoriaAlmacenado = await categoriareq.save();
   
        return categoriaAlmacenado;
      },
  


  };
