'use strict'
const mongoose = require('mongoose');
const Proveedor = require('../api/model/proveedor')
 
 
module.exports = {
    async getAllProveedors() {
      const proveedors = await Proveedor.find();
 
      return proveedors;
    },
 
    async getProveedorById(id) {
      const proveedor = await Proveedor.findById(id);
 
      return proveedor;
    },

    async saveProveedor(proveedorreq) {
        const proveedorAlmacenado = await proveedorreq.save();
   
        return proveedorAlmacenado;
      },
  


  };
