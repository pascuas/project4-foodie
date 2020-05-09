const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const ImageSchema = new Schema({
    image: String
})

const Image = mongoose.model('Image', ImageSchema)
module.exports = Image