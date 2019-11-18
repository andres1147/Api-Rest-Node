const ClienteService = require('../../services/clienteservice');
 
    module.exports = {
      async getClientes(req, res, next) {
        const clientes = await ClienteService.getAllClientes();
 
        return res.status(200).send({ clientes });
      },
 
      async getCliente(req, res, next) {
        const { id } = req.params;
 
        const cliente = await ClienteService.getClienteById(id);
 
        return res.status(200).send({ cliente });
      },

      async saveCliente(req, res, next) {
        let clienteRecibido = new Cliente()
        clienteRecibido.descripcion =req.body.descripcion
 
        const clienteAlmacenado = await ClienteService.saveCliente(clienteRecibido);
 
        return res.status(200).send({ clienteAlmacenado });
      },




    };
 
