const Router = require('express-promise-router').default;
 
const proveedorController = require('../controllers/proveedorcontroller');
 
    const router = Router();
 
    router.get('/', proveedorController.getProveedors);
    router.get('/:id', proveedorController.getProveedor);
    router.post('/', proveedorController.saveProveedor);
 
    module.exports = router;
