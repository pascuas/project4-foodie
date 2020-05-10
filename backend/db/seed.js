const mongoose = require('./connection')
const Restaurant = require('../models/restaurant')

Restaurant.find({}).remove(() => {
    Restaurant.create({
        Name: "Súp Noodle Bar",
        Description: "Vietnamese, Noodles",
        Type: "Asian",
        Cost: "$$",
        CityState: "Cerritos, CA",
        Address: "11314 South St",
        PhoneNum: "(562) 402-8286"
    })
})