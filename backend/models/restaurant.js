const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const RestaurantSchema = new Schema({
    Name: String,
    Description: String,
    Type: String,
    Cost: String,
    CityState: String,
    Address: String,
    PhoneNum: String,
    Reviews: [
        {
            ref: 'Review',
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    Images: [
        {
            ref: 'Image',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant