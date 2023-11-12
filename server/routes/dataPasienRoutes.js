const routes = require('express').Router()
const dataPasienController = require('../controllers/dataPasienControllers')

//ke view
routes.get('/pasien/view', dataPasienController.pasienView)
routes.get('/pasien/formPasien', dataPasienController.pasienViewInput)

// routes.get('/pasien/:id', dataPasienController.select)
// routes.get('/pasien/', dataPasienController.selectAll)

routes.post('/pasien', dataPasienController.insert)
routes.put('/pasien/:Nomor_RM', dataPasienController.update)

routes.delete('/pasien/:Nomor_RM', dataPasienController.delete)


module.exports = routes

