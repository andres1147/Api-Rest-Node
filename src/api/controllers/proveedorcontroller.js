const ProveedorService = require('../../services/proveedorservice');
 
    module.exports = {
      async getProveedors(req, res, next) {
        const proveedors = await ProveedorService.getAllProveedors();
 
        return res.status(200).send({ proveedors });
      },
 
      async getProveedor(req, res, next) {
        const { id } = req.params;
 
        const proveedor = await ProveedorService.getProveedorById(id);
 
        return res.status(200).send({ proveedor });
      },

      async saveProveedor(req, res, next) {
        let proveedorRecibido = new Proveedor()
        proveedorRecibido.descripcion =req.body.descripcion
 
        const proveedorAlmacenado = await ProveedorService.saveProveedor(proveedorRecibido);
 
        return res.status(200).send({ proveedorAlmacenado });
      },




    };
 
