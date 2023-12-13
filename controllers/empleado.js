const Empleado = require('./../models/model-empleado')
const Concesionario = require('./../models/model-concesionario')

module.exports = {
  findAll : async(req,res)=>{
    try {
      const data = await Empleado.find({})

      return res.status(200).json({"state":true,"data":data})
    } catch (error) {
      return res.status(500).json({"state":false,"error":error})
    }
  },

  save : async(req,res)=>{
    const {id} = req.params;
    const concesionario = await Concesionario.findById(id)
    if (concesionario){
      try {
        const empleado = new Empleado(req.body)
        
        empleado.concesionario = concesionario

        const result = await empleado.save()

        concesionario.empleado.push(empleado)

        await concesionario.save()

        return res.status(200).json({"state":true,data:result})
      } catch (error) {
        return res.status(500).json({"state":false,"error":error})
      }
    }else{
        return res.status(200).json({"state":false,"error":"Curso No Existe"})
    }  
  },
  deleteById: async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEmpleado = await Empleado.findByIdAndDelete(id);

        if (!deletedEmpleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        res.json({ message: 'Empleado eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
}