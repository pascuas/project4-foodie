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
        PhoneNum: "(562) 402-8286",
        Hours: [
            {
                Day: "Monday",
                Hours: "11:00am - 9:00pm"
            },
            {
                Day: "Tuesday",
                Hours: "11:00am - 9:00pm"
            },
            {
                Day: "Wednesday",
                Hours: "11:00am - 9:00pm"
            },
            {
                Day: "Thursday",
                Hours: "11:00am - 9:00pm"
            },
            {
                Day: "Friday",
                Hours: "11:00am - 9:00pm"
            },
            {
                Day: "Saturday",
                Hours: "11:00am - 9:00pm"
            },
            {
                Day: "Sunday",
                Hours: "11:00am - 9:00pm"
            }
        ],
        Reviews: [
            {
                Review: "Visited the place just before all this COVID19 became serious. Loved the place. The turn-around was quick so the wait wasn't as long as I thought it'll be. Conclusion, it was worth the wait!!",
                Rating: 5
            },
            {
                Review: "Top places to eat since moving down to SoCal 3 years ago.Lomo Saltaldo with garlic noodles is my go to order. It's fun to order family style so everyone can try something different.",
                Rating: 5
            }
        ],
        Images: [
            {
                image: "https://s3-media0.fl.yelpcdn.com/bphoto/YoVS0N1NxbARBqr3V6Xj1Q/o.jpg"
            },
            {
                image: "https://s3-media0.fl.yelpcdn.com/bphoto/T9Np2_O0YBbT7113dOCoYg/o.jpg"
            }
        ]
    }).then(() => process.exit())
})