const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaConcesionario = new Schema({
  id : {
    type : Number,
    required : true,
    unique : true
  },
  name : {
    type : String,
    required : true,
  },
  adress :{
    type : String,
    required : true
  },
  phone :{
    type : Number,
    required : true
  },
  email :{
    type : String,
    required : true
  },

  empleado : [
    {
      type : Schema.Types.ObjectId,
      ref : 'empleado'
    }
  ]
})


module.exports = mongoose.model('concesionario',SchemaConcesionario)