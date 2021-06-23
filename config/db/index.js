const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://sonhandsome:sonhandsome01@nodejs.mad96.mongodb.net/nodejs',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true
        });
        console.log('Connect database successfully !!!')
    } catch(error){
        console.log('Connect failure !!!')
    }
}

module.exports = {connect};