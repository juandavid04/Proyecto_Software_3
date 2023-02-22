const db = require('./Conection.service')
const DataTypes = require('sequelize')

const Trabajo = db.define('trabajo', {

  Nombre: {
    type: DataTypes.STRING
  },
  Descripcion: {
    type: DataTypes.STRING
  },
  Requerimientos: {
    type: DataTypes.STRING
  },
  Fecha_Limite: {
    type: DataTypes.DATE
  },
  Fecha_Creacion: {
    type: DataTypes.DATE
  },
  Estado: {
    type: DataTypes.INTEGER
  },
  categoria_Id: {
    type: DataTypes.INTEGER
  },
  ciudads_Id: {
    type: DataTypes.INTEGER
  }
},
{timestamps: false}
)

module.exports = Trabajo
