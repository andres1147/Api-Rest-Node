'use strict'
const mongoose = require('mongoose');
const TipoAnimal = require('../api/model/tipoanimal')
 
 
module.exports = {
    async getAllTipoAnimals() {
      const tipoanimals = await TipoAnimal.find();
 
      return tipoanimals;
    },
 
    async getTipoAnimalById(id) {
      const tipoanimal = await TipoAnimal.findById(id);
 
      return tipoanimal;
    },
  };
