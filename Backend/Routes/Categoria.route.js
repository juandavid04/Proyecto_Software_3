const express = require('express');
const CategoriaControl = require('../Controles/Categoria.control')

const route = express.Router()

const control = new CategoriaControl();

route.get('/', async(req, res) => {
  const categorias = await control.find()
  res.json({
    categorias
  })
})

module.exports = route
