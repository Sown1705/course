const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const { query } = require('express')
const route = require('./routes/index')
const db = require('./config/db/index')
const methodOverride = require('method-override')
const port = process.env.PORT || 3000
//Connext to database
db.connect()
//
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
//HTTP logger
//app.use(morgan('combined'))
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))
//console.log('PATH: ',path.join(__dirname,'resources/views'))

route(app)

app.listen(port, () => console.log('App listening at http://localhost:3000'))
