const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const HourSchema = new Schema({
    Day: String,
    Hours: String
})

const Hour = mongoose.model('Hour', HourSchema)
module.exports = Hour