const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const RestaurantSchema = new Schema({
    Name: String,
    Type: String,
    Cost: String,
    Address: String,
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