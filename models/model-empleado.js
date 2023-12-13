const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaEmpleado = new Schema({
  id : {
    type : Number,
    required : true,
    unique : true
  },
  name :{
    type : String,
    required : true
  },
  cargo : {
    type : String,
    required : false
  },
  phone :{
    type : Number,
    required : true
  },

  concesionario : {
    type : Schema.Types.ObjectId,
    ref : 'concesionario'
  }
})

module.exports = mongoose.model('empleado',SchemaEmpleado)