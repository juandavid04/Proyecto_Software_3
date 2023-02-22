const express = require('express');
const PersonaService = require('../Controles/Persona.control')

const route = express.Router()

const service = new PersonaService();

route.get('/', async(req, res) => {
  const personas = await service.find()
  res.json({
    personas
  })
})

route.get('/:Id', async(req, res) => {
  const {Id} = req.params
  const persona = await service.findOne(Id)
  res.json({
    persona
  })
})

route.post('/', async(req, res) => {
  console.log(req.body)
  const data = req.body;
  const nuevaPersona = await service.create(data);
  res.json(nuevaPersona)
})

route.patch('/:id', async(req, res) => {
  const{id} = req.params;
  const body = req.body;
  const persona = await service.update(id, body)
  res.json(persona)
})

route.delete('/:id', async(req, res) => {
  const {id} = req.params;
  const rta = service.delete(id)
  res.status(200).json(rta)
})

module.exports = route
