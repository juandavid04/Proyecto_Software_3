const express = require('express');
const TrabajoService = require('../Controles/Trabajo.control')

const route = express.Router()

const service = new TrabajoService();

route.get('/', async(req, res) => {
  try {
    const trabajo = await service.find()
    res.json({
      trabajo
    })
  } catch (error) {
    console.log(error)
    return 'Hubo un error'
  }
})

route.get('/:Id', async(req, res) => {
  try {
    const {Id} = req.params
    const trabajo = await service.findOne(Id)
    res.json({
      trabajo
    })
  } catch (error) {
    console.log(error)
    return 'Hubo un error'
  }
})

route.post('/', async(req, res) => {
  try {
    console.log(req.body)
    const data = req.body;
    const nuevoTrabajo = await service.create(data);
    res.json(nuevoTrabajo)
  } catch (error) {
    console.log(error)
    return 'Hubo un error'
  }
})

route.patch('/:id', async(req, res) => {
  try {
    const{id} = req.params;
    const body = req.body;
    const trabajo = await service.update(id, body)
  res.json(trabajo)
  } catch (error) {
    console.log(error)
    return 'Hubo un error'
  }
})

route.delete('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const rta = service.delete(id)
    res.status(200).json(rta)
    res.json(trabajo)
  } catch (error) {
    console.log(error)
    return 'Hubo un error'
  }
})

module.exports = route
