const Vehiculos = require('./../models/model-vehiculo')
const Clientes = require('./../models/model-cliente')

module.exports = {
    findAll : async(req,res)=>{
      try {
        const data = await Vehiculos.find({})
  
        return res.status(200).json({"state":true,"data":data})
      } catch (error) {
        return res.status(500).json({"state":false,"error":error})
      }
    },
  
    save : async(req,res)=>{
      const {id} = req.params;
      const clientes = await Clientes.findById(id)
      if (clientes){
        try {
          const vehiculos = new Vehiculos(req.body)
          
          vehiculos.clientes = clientes
  
          const result = await vehiculos.save()
  
          clientes.vehiculo.push(vehiculos)
  
          await clientes.save()
  
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
          const deletedVehiculo = await Vehiculos.findByIdAndDelete(id);

          if (!deletedVehiculo) {
              return res.status(404).json({ message: 'Vehículo no encontrado' });
          }

          res.json({ message: 'Vehículo eliminado exitosamente' });
      } catch (error) {
          console.error('Error al eliminar vehículo:', error);
          res.status(500).json({ message: 'Error interno del servidor' });
      }
  }
  }