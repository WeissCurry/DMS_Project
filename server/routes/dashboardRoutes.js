const routes = require('express').Router()
const dashboardController = require('../controllers/dashboardControllers')

routes.get('/dashboard', dashboardController.diagramBatang)

module.exports = routes