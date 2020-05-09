const Review = require('../models/review')
const Restaurant = require('../models/restaurant')


const getAll = (req, res) => {
    Review.find().then(reviews => res.json(reviews))
}

const getById = (req, res) => {
    Review.findById(req.params.id).then(review => {
        res.json(review)
    })
}

const create = (req, res) => {
    Review.create(req.body).then(review => Restaurant.findOne({_id: req.params.Id}).then(restaurant => {
        restaurant.Reviews.push(review._id)
        restaurant.save()
        res.json(restaurant)
    }))
}

const update = (req, res) => {
    Review.updateOne({_id: req.params.reviewId}, {"$set": req.body}).then(review => res.json(review))
}

const remove = (req, res) => {
    Review.remove({_id: req.params.reviewId}).then(() => {
        res.json({
            "status": "success",
            "msg": "review deleted"
        })
    })
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}