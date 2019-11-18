'use strict'
const mongoose = require('mongoose');
const Producto = require('../api/model/producto')
 
 
module.exports = {
    async getAllProductos() {
      const productos = await Producto.find();
 
      return productos;
    },
 
    async getProductoById(id) {
      const producto = await Producto.findById(id);
 
      return producto;
    },

    async saveProducto(productoreq) {
        const productoAlmacenado = await productoreq.save();
   
        return productoAlmacenado;
      },
  


  };
