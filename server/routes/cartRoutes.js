const routes = require('express').Router()
const cartController = require('../controllers/cartControllers')

routes.post('/cart', cartController.insert)

module.exports = routes