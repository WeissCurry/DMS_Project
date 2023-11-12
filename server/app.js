const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index')
const methodOverride = require('method-override');
// const bcrypt = require('bcrypt')
require('dotenv').config()

//middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false})) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

//ke routes 
app.use(routes)


// //middleware error yg lain 
// //not found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})


// //middlewre error handler
const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500 || err.status)
    res.send({
        error : {
            status : 500 || err.status,
            message : "internal server error" || err.message
        }
    })
}
app.use(errorMiddleware)

//nyalain servernya
app.listen(PORT, () => {
    console.log(`I love you ${PORT}!!`);
    console.log(`http://localhost:${PORT}`);
});
