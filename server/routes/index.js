const routes = require('express').Router()
const authRoutes = require('./authRoutes')
const dataPasienRoutes = require('./dataPasienRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const katalogObatRoutes = require('./katalogObatRoutes')
const homeController = require('../controllers/homeControllers')
const cartRoutes = require('./cartRoutes')

global.query = require("../models/query");


//test
routes.get('/', (req, res) => {
    res.send("TEST BERHASIL")
})

//kirim ke authRoutes.js
routes.use("/user", authRoutes)

routes.use("/home", dataPasienRoutes)
routes.use("/home", dashboardRoutes)
routes.use("/home", katalogObatRoutes) 

routes.use("/home", cartRoutes)

routes.get('/home', homeController.homeView)


module.exports = routes