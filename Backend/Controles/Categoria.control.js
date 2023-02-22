const Categoria = require('../Services/Categoria.service');

class CategoriaControl {
   find() {
    return Categoria.findAll();
  }
}

module.exports = CategoriaControl
