const Course = require('../models/Course')
const {multipleMongooseToObject}= require('../../util/mongoose');


//xu ly cac controller cua news
class MeController{
    //GET /me/stored/courses
    storedCourses(req,res,next){
        Course.find({})
        .then(course=>res.render('me/stored-courses',{course: multipleMongooseToObject(course) }))
        .catch(next)
    }
}

module.exports = new MeController();