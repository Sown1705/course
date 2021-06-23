const Course = require('../models/Course')
const {multipleMongooseToObject}= require('../../util/mongoose')

//xu ly cac controller cua news
class SiteController{
    home(req,res,next){
        // res.render('search')
        // Course.find({},function(err,courses,next){
        //     if(!err){
        //         res.json(courses)
        //     }
        //     else{
        //         next(error)
        //     }
        // })

        Course.find({})
        .then(courses => {

            res.render('home',{courses:multipleMongooseToObject(courses)})
        })
        .catch(error => next(error))
        
    }

    search(req,res){
        res.render('search')
    }
}

module.exports = new SiteController();