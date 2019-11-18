const FacturaService = require('../../services/facturaservice');
 
    module.exports = {
      async getFacturas(req, res, next) {
        const facturas = await FacturaService.getAllFacturas();
 
        return res.status(200).send({ facturas });
      },
 
      async getFactura(req, res, next) {
        const { id } = req.params;
 
        const factura = await FacturaService.getFacturaById(id);
 
        return res.status(200).send({ factura });
      },

      async saveFactura(req, res, next) {
        let facturaRecibido = new Factura()
        facturaRecibido.descripcion =req.body.descripcion
 
        const facturaAlmacenado = await FacturaService.saveFactura(facturaRecibido);
 
        return res.status(200).send({ facturaAlmacenado });
      },




    };
 
