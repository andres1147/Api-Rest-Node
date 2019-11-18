const VentaService = require('../../services/ventaservice');
 
    module.exports = {
      async getVentas(req, res, next) {
        const ventas = await VentaService.getAllVentas();
 
        return res.status(200).send({ ventas });
      },
 
      async getVenta(req, res, next) {
        const { id } = req.params;
 
        const venta = await VentaService.getVentaById(id);
 
        return res.status(200).send({ venta });
      },

      async saveVenta(req, res, next) {
        let ventaRecibido = new Venta()
        ventaRecibido.descripcion =req.body.descripcion
 
        const ventaAlmacenado = await VentaService.saveVenta(ventaRecibido);
 
        return res.status(200).send({ ventaAlmacenado });
      },




    };
 
