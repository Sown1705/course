module.exports = {
    multipleMongooseToObject: function(mongoosesArrays){
        return mongoosesArrays.map(mongoosesArrays=>mongoosesArrays.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose.toObject();
    }
}