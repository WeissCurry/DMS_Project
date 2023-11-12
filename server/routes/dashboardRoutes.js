const routes = require('express').Router()
const dashboardController = require('../controllers/dashboardControllers')

routes.get('/dashboard', dashboardController.diagramBatang)
// routes.get('/dashboard/:id', dashboardController.dashboardView)

module.exports = routes