const mongoose = require('mongoose')

//conexión remota (MongoDB Atlas)
const URI = "mongodb+srv://diegocaceres02:Ge21042020@cluster0.qivecom.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(()=>console.log('Connect DB Success'))
    .catch( e => console.log(e))

module.exports = mongoose