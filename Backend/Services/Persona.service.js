const db = require('./Conection.service')
const DataTypes = require('sequelize')

const Persona = db.define('persona', {

  Nombre: {
    type: DataTypes.STRING
  },
  Apellido: {
    type: DataTypes.STRING
  },
  CV: {
    type: DataTypes.BLOB
  },
  Telefono: {
    type: DataTypes.INTEGER
  },
  Email: {
    type: DataTypes.STRING
  },
  trabajos_Id: {
    type: DataTypes.INTEGER
  },
  Fecha_Creado: {
    type: DataTypes.DATE
  },
  Estado: {
    type: DataTypes.INTEGER
  },
},
{timestamps: false}
)

module.exports = Persona
