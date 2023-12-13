const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaCliente = new Schema({
    id : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },

    vehiculo : [
        {
            type : Schema.Types.ObjectId,
            ref : 'vehiculo'
        }
    ]
})

module.exports = mongoose.model('cliente',SchemaCliente)