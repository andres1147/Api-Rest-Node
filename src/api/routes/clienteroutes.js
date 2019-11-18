const Router = require('express-promise-router').default;
 
const clienteController = require('../controllers/clientecontroller');
 
    const router = Router();
 
    router.get('/', clienteController.getClientes);
    router.get('/:id', clienteController.getCliente);
    router.post('/', clienteController.saveCliente);
 
    module.exports = router;
