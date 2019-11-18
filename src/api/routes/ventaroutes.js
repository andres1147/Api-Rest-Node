const Router = require('express-promise-router').default;
 
const ventaController = require('../controllers/ventacontroller');
 
    const router = Router();
 
    router.get('/', ventaController.getVentas);
    router.get('/:id', ventaController.getVenta);
    router.post('/', ventaController.saveVenta);
 
    module.exports = router;
