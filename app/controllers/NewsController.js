//xu ly cac controller cua news
class NewController{
    create(req,res){
        res.render('news',{title:"Create New"})
    }

    showDetails(req,res){
        res.render('news',{title:"Detail !!!"})
    }
}

module.exports = new NewController();