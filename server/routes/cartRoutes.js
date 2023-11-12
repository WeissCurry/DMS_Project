const routes = require('express').Router()
const cartController = require('../controllers/cartControllers')

routes.post('/cart', cartController.insert)
routes.get('/cart', cartController.cartView)
routes.delete('/cart/:id', cartController.delete)
routes.get('/cart/formCart', cartController.cartViewInput)


module.exports = routes