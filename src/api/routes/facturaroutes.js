const Router = require('express-promise-router').default;
 
const facturaController = require('../controllers/facturacontroller');
 
    const router = Router();
 
    router.get('/', facturaController.getFacturas);
    router.get('/:id', facturaController.getFactura);
    router.post('/', facturaController.saveFactura);
 
    module.exports = router;
