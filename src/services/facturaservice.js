'use strict'
const mongoose = require('mongoose');
const Factura = require('../api/model/factura')
 
 
module.exports = {
    async getAllFacturas() {
      const facturas = await Factura.find();
 
      return facturas;
    },
 
    async getFacturaById(id) {
      const factura = await Factura.findById(id);
 
      return factura;
    },

    async saveFactura(facturareq) {
        const facturaAlmacenado = await facturareq.save();
   
        return facturaAlmacenado;
      },
  


  };
