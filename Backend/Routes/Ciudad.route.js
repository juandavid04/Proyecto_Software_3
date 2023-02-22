const express = require('express');
const CiudadControl = require('../Controles/Ciudad.control')

const route = express.Router()

const control = new CiudadControl();

route.get('/', async (req, res) => {
  const ciudad = await control.find()
  res.json({
    ciudad
  })
})

module.exports = route
