const Router = require('express-promise-router').default;
 
const tipoanimalController = require('../controllers/tipoanimalcontroller');
 
    const router = Router();
 
    router.get('/', tipoanimalController.getTipoAnimals);
    router.get('/:id', tipoanimalController.getTipoAnimal);
 
    module.exports = router;
