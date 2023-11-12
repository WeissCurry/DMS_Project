const routes = require('express').Router()
const authController = require('../controllers/authControllers')

/* REGISTER */

// // register ke Views
// routes.get('/register', (req, res) =>{
//     res.render('register')
// })
routes.post('/register', authController.register)
routes.get('/register', authController.registerView)


/* LOGIN */

// //login ke views
// routes.get('/login', (req, res) => {
//     // res.render("../client/vies/loginPage")
// })
routes.post('/login', authController.login)
routes.get('/login', authController.loginView)




module.exports = routes