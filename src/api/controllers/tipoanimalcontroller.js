const TipoAnimalService = require('../../services/tipoanimalservice');
 
    module.exports = {
      async getTipoAnimals(req, res, next) {
        const tipoanimals = await TipoAnimalService.getAllTipoAnimals();
 
        return res.status(200).send({ tipoanimals });
      },
 
      async getTipoAnimal(req, res, next) {
        const { id } = req.params;
 
        const tipoanimal = await TipoAnimalService.getTipoAnimalById(id);
 
        return res.status(200).send({ tipoanimal });
      },
    };
 
