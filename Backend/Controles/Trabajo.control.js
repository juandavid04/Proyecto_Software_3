const Trabajo = require('../Services/Trabajo.service');

class TrabajoControl {
  find() {
    return Trabajo.findAll();
  }

  findOne(Id) {
    return Trabajo.findByPk(Id);
  }

  create(data) {
    const nuevoTrabajo = Trabajo.create({
      Nombre: data.Nombre,
      Descripcion: data.Descripcion,
      Requerimientos: data.Requerimientos,
      Fecha_Limite: data.Fecha_Limite,
      Fecha_Creacion: data.Fecha_Creacion,
      Estado: data.Estado,
      categoria_Id: data.categoria_Id,
      ciudads_Id: data.ciudads_Id,
    });
    return nuevoTrabajo;
  }

  async update(id, cambios){
      await Trabajo.update({
      ...Trabajo.findByPk(id),
      Nombre: cambios.Nombre,
      Descripcion: cambios.Descripcion,
      Requerimientos: cambios.Requerimientos,
      Fecha_Limite: cambios.Fecha_Limite,
      Fecha_Creacion: cambios.Fecha_Creacion,
      Estado: cambios.Estado,
      categoria_Id: cambios.categoria_Id,
      ciudads_Id: cambios.ciudads_Id,
    },
    {
      where: {Id: id}
    })
    return await Trabajo.findByPk(id)
  }

  async delete(id) {
     await Trabajo.destroy({
      where: {
        Id : id
      }
    })
  }
}

module.exports = TrabajoControl;
