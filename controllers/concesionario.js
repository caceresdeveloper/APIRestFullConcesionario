const Concesionario = require('./../models/model-concesionario')

module.exports = {
    findAll : async(req,res) => {
        try {
            const data = await Concesionario.find({})

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    findById : async(req,res) => {
        const {id} = req.params
        try {
            const data = await Concesionario.findById(id).populate('empleado')
            
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    save : async (req,res)=>{
        const concesionario = new Concesionario(req.body)
    
        try {
            const data = await concesionario.save()

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    update : async(req,res)=>{
        try {
            return res.status(200).json({"state":true,"data":null})    
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },
    deleteById: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedConcesionario = await Concesionario.findByIdAndDelete(id);

            if (!deletedConcesionario) {
                return res.status(404).json({ message: 'Concesionario no encontrado' });
            }

            res.json({ message: 'Concesionario eliminado exitosamente' });
        } catch (error) {
            console.error('Error al eliminar concesionario:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}