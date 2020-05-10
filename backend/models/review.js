const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    Review: String,
    Rating: Number
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review