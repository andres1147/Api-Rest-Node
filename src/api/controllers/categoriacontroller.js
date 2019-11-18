const CategoriaService = require('../../services/categoriaservice');
 
    module.exports = {
      async getCategorias(req, res, next) {
        const categorias = await CategoriaService.getAllCategorias();
 
        return res.status(200).send({ categorias });
      },
 
      async getCategoria(req, res, next) {
        const { id } = req.params;
 
        const categoria = await CategoriaService.getCategoriaById(id);
 
        return res.status(200).send({ categoria });
      },

      async saveCategoria(req, res, next) {
        let categoriaRecibido = new Categoria()
        categoriaRecibido.descripcion =req.body.descripcion
 
        const categoriaAlmacenado = await CategoriaService.saveCategoria(categoriaRecibido);
 
        return res.status(200).send({ categoriaAlmacenado });
      },
    };
 
