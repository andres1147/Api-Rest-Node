const Router = require('express-promise-router').default;
 
const categoriaController = require('../controllers/categoriacontroller');
 
    const router = Router();
 
    router.get('/', categoriaController.getCategorias);
    router.get('/:id', categoriaController.getCategoria);
    router.post('/', categoriaController.saveCategoria);
 
    module.exports = router;
