'use strict'
const mongoose = require('mongoose');
const Venta = require('../api/model/venta')
 
 
module.exports = {
    async getAllVentas() {
      const ventas = await Venta.find();
 
      return ventas;
    },
 
    async getVentaById(id) {
      const venta = await Venta.findById(id);
 
      return venta;
    },

    async saveVenta(ventareq) {
        const ventaAlmacenado = await ventareq.save();
   
        return ventaAlmacenado;
      },
  


  };
