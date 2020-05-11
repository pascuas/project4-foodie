const mongoose = require('./connection')
const Restaurant = require('../models/restaurant')
const restaurantData = require('./restaurantData.json')

Restaurant.deleteMany({}).then(() => {
    Restaurant.collection.insert(restaurantData).then(restaurants => {
        console.log(restaurants)
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})

