const express = require('express')

const app = express()

//conectar la base de datos
require('./drivers/connect-db')

//setters
app.set('PORT',process.env.PORT || 3000)

//middlewares
app.use(express.json())

app.use("/cliente", require('./routes/cliente'))
app.use("/concesionario", require('./routes/concesionario'))
app.use("/empleado", require('./routes/empleado'))
app.use("/vehiculo", require('./routes/vehiculo'))


app.listen(app.get('PORT'),()=>console.log(`Sever Listen to Port ${app.get('PORT')}`))