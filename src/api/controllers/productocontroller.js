const ProductoService = require('../../services/productoservice');
 
    module.exports = {
      async getProductos(req, res, next) {
        const productos = await ProductoService.getAllProductos();
 
        return res.status(200).send({ productos });
      },
 
      async getProducto(req, res, next) {
        const { id } = req.params;
 
        const producto = await ProductoService.getProductoById(id);
 
        return res.status(200).send({ producto });
      },

      async saveProducto(req, res, next) {
        let productoRecibido = new Producto()
        productoRecibido.descripcion =req.body.descripcion
 
        const productoAlmacenado = await ProductoService.saveProducto(productoRecibido);
 
        return res.status(200).send({ productoAlmacenado });
      },




    };
 
