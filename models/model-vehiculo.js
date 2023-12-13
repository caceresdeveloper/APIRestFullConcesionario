const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaVehiculo = new Schema({
  id : {
    type : Number,
    required : true,
    unique : true
  },
  brand :{
    type : String,
    required : true
  },
  modelo : {
    type : Number,
    required : true
  },
  color :{
    type : String,
    required : true
  },
  price :{
    type : Number,
    required : true
  },

  cliente : {
    type : Schema.Types.ObjectId,
    ref : 'cliente'
  }
})

module.exports = mongoose.model('vehiculo',SchemaVehiculo)