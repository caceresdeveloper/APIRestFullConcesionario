const routes = require('express').Router()

const {
    findAll,
    findById,
    save,
    update,
    deleteById
} = require ('./../controllers/cliente')

routes.get("/",findAll)

routes.get("/:id",findById)

routes.post("/",save)

routes.put("/:id",update)

routes.delete("/:id",deleteById)

module.exports = routes;