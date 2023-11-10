const routes = require('express').Router()
const dataPasienController = require('../controllers/dataPasienControllers')

routes.get('/pasien/:id', dataPasienController.select)
routes.get('/pasien/', dataPasienController.selectAll)

routes.post('/pasien', dataPasienController.insert)
routes.put('/pasien/:Nomor_RM', dataPasienController.update)

routes.delete('/pasien/:Nomor_RM', dataPasienController.delete)
// routes.delete('/pasien', dataPasienController.deleteAll)

module.exports = routes

