const db = require('./Conection.service')
const DataTypes = require('sequelize')

const ciudad = db.define('ciudad', {
  Nombre: {
    type: DataTypes.STRING
  }
},
{timestamps: false})

module.exports = ciudad
