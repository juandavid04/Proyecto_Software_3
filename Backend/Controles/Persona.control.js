const Persona = require('../Services/Persona.service');

class PersonaControl {
  find() {
    return Persona.findAll();
  }

  findOne(Id) {
    return Persona.findByPk(Id);
  }

  create(data) {
    const nuevaPersona = Persona.create({
      Nombre: data.Nombre,
      Apellido: data.Apellido,
      CV: data.CV,
      Telefono: data.Telefono,
      Email: data.Email,
      trabajos_Id: data.trabajos_Id,
      Fecha_Creado: data.Fecha_Creado,
      Estado: data.Estado,
    });
    return nuevaPersona;
  }

  async update(id, cambios){
      await Persona.update({
      ...Persona.findByPk(id),
      Nombre: cambios.Nombre,
      Apellido: cambios.Apellido,
      CV: cambios.CV,
      Telefono: cambios.Telefono,
      Email: cambios.Email,
      trabajos_Id: cambios.trabajos_Id,
      Fecha_Creado: cambios.Fecha_Creado,
      Estado: cambios.Estado,
    },
    {
      where: {Id: id}
    })
    return await Persona.findByPk(id)
  }

  async delete(id) {
     await Persona.destroy({
      where: {
        Id : id
      }
    })
  }
}

module.exports = PersonaControl;
