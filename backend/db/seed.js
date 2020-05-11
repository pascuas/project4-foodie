const Restaurant = require('../models/restaurant')
const Hour = require('../models/hour')
const Review = require('../models/review')
const Image = require('../models/image')

Restaurant.find({}).remove(() => {
    Hour.find({}).remove(() => {
        Review.find({}).remove(() => {
            Image.find({}).remove(() => {
                Restaurant.create({
                    Name: "Súp Noodle Bar",
                    Description: "Vietnamese, Noodles",
                    Type: "Asian",
                    Cost: "$$",
                    CityState: "Cerritos, CA",
                    Address: "11314 South St",
                    PhoneNum: "(562) 402-8286",
                }).then(restaurant => {
                    Promise.all([
                      Hour.create({
                          Day: "Monday",
                          Hours: "11:00am - 9:00pm"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Hour.create({
                          Day: "Tuesday",
                          Hours: "11:00am - 9:00pm"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Hour.create({
                          Day: "Wednesday",
                          Hours: "11:00am - 9:0pam"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Hour.create({
                          Day: "Thursday",
                          Hours: "11:00am - 9:00pm"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Hour.create({
                          Day: "Friday",
                          Hours: "11:00am - 9:00pm"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Hour.create({
                          Day: "Saturday",
                          Hours: "11:00am - 9:00pm"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Hour.create({
                          Day: "Sunday",
                          Hours: "11:00am - 9:00pm"
                      }).then(hour => {
                          restaurant.Hours.push(hour)
                      }),
                      Review.create({
                          Review: "Visited the place just before all this COVID19 became serious. Loved the place. The turn-around was quick so the wait wasn't as long as I thought it'll be. Conclusion, it was worth the wait!",
                          Rating: 5
                      }).then(review => {
                          restaurant.Reviews.push(review)
                      }),
                      Review.create({
                          Review: "Top places to eat since moving down to SoCal 3 years ago.Lomo Saltaldo with garlic noodles is my go to order. It's fun to order family style so everyone can try something different.",
                          Rating: 5
                      }).then(review => {
                          restaurant.Reviews.push(review)
                      }),
                      Image.create({
                          image: "https://s3-media0.fl.yelpcdn.com/bphoto/YoVS0N1NxbARBqr3V6Xj1Q/o.jpg"
                      }).then(image => {
                          restaurant.Images.push(image)
                      }),
                      Image.create({
                          image: "https://s3-media0.fl.yelpcdn.com/bphoto/T9Np2_O0YBbT7113dOCoYg/o.jpg"
                      }).then(image => {
                          restaurant.Images.push(image)
                      })
                    ]).then(() => {
                        restaurant.save()
                    })
                })
            })
        })
    })
})


