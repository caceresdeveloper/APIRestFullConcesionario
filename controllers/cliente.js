const Cliente = require('./../models/model-cliente')

module.exports = {
    findAll: async (req, res) => {
        try {
            const data = await Cliente.find({})

            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },

    findById: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Cliente.findById(id).populate('vehiculo')

            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },

    save: async (req, res) => {
        const cliente = new Cliente(req.body)

        try {
            const data = await cliente.save()

            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },

    update: async (req, res) => {
        try {
            return res.status(200).json({ "state": true, "data": null })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    deleteById: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedCliente = await Cliente.findByIdAndDelete(id);

            if (!deletedCliente) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }

            res.json({ message: 'Cliente eliminado exitosamente' });
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}