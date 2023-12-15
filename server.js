const express = require('express')
const routerApi = require('./routes')

const app = express()

//conectar la base de datos
require('./drivers/connect-db')

//setters
app.set('PORT',process.env.PORT || 3000)

//middlewares
app.use(express.json())

/*const whitelist = ['http://localhost:8080']
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)){
            callback(null,true)
        }
    }

}
app.use(cors())*/

app.use("/cliente", require('./routes/cliente'))
app.use("/concesionario", require('./routes/concesionario'))
app.use("/empleado", require('./routes/empleado'))
app.use("/vehiculo", require('./routes/vehiculo'))

app.get('/', (req,res)=>{
    res.send('Prueba de funcionamiento del server')
})

routerApi(app)

app.listen(app.get('PORT'),()=>console.log(`Sever Listen to Port ${app.get('PORT')}`))