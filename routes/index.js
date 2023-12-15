const clienteRouter = require('./cliente');
const concesionarioRouter = require('./concesionario');
const empleadoRouter = require('./empleado');
const vehiculoRouter = require('./vehiculo');

function routerApi(app) {
    app.use('/cliente',clienteRouter);
    app.use('/concesionario', concesionarioRouter);
    app.use('/empleado', empleadoRouter);
    app.use('/vehiculo',vehiculoRouter);
}

module.exports = routerApi;

