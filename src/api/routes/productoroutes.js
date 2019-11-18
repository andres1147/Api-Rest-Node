const Router = require('express-promise-router').default;
 
const productoController = require('../controllers/productocontroller');
 
    const router = Router();
 
    router.get('/', productoController.getProductos);
    router.get('/:id', productoController.getProducto);
    router.post('/', productoController.saveProducto);
 
    module.exports = router;
