const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
    Name: String,
    Description: String,
    Type: String,
    Cost: String,
    CityState: String,
    Address: String,
    PhoneNum: String,
    Image: String,
})

const Favorite = mongoose.model('Favorites', FavoriteSchema)
module.exports = Favorite