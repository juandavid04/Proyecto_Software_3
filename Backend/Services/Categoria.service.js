const db = require('./Conection.service')
const DataTypes = require('sequelize')

const Categoria = db.define('categoria', {
  Nombre: {
    type: DataTypes.STRING
  },
},
  {timestamps: false}
)

module.exports = Categoria
