const Sequelize = require('sequelize')

const db = new Sequelize('Software3', 'SoftwareTest', '', {
  host: '34.121.220.44',
  dialect: 'mysql'
});

db.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
})


module.exports = db
