const routes = require('express').Router()

const {
  findAll,
  save,
  deleteById
} = require('./../controllers/empleado')

routes.get("/",findAll)

routes.post("/:id",save)

routes.delete("/:id",deleteById)

module.exports = routes;