'use strict'
const mongoose = require('mongoose');
const Cliente = require('../api/model/cliente')
 
 
module.exports = {
    async getAllClientes() {
      const clientes = await Cliente.find();
 
      return clientes;
    },
 
    async getClienteById(id) {
      const cliente = await Cliente.findById(id);
 
      return cliente;
    },

    async saveCliente(clientereq) {
        const clienteAlmacenado = await clientereq.save();
   
        return clienteAlmacenado;
      },
  


  };
