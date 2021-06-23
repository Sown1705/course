//dieu huong cac controller
const news = require('./news')
const site = require('./site')
const courses = require('./courses')
const me = require('./me')
function route(app){
    app.use('/news',news)
    app.use('/',site)
    app.use('/course',courses)
    app.use('/me',me)
}

module.exports = route;