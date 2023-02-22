const Ciudad = require('../Services/Ciudad.service');

class CiudadControl {
   async find() {
    return await Ciudad.findAll();
  }
}

module.exports = CiudadControl
