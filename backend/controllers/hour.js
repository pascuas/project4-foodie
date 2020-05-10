const Hour = require('../models/hour')
const Restaurant = require('../models/restaurant')

const getAll = (req, res) => {
    Hour.find({}).then(hours => res.json(hours))
}

const getById = (req, res) => {
    Hour.findById(req.params.hourId).then(hour => {
        res.json(hour)
    })
}

const create = (req, res) => {
    Hour.create(req.body).then(hour => Restaurant.findOne({_id: req.params.resId}).then(restaurant => {
        restaurant.Hours.push(hour._id)
        restaurant.save()
        res.json(restaurant)
    }))
}

const update = (req, res) => {
    Hour.updateOne({_id: req.params.hourId}, {"$set": req.body}).then(hour => res.json(hour))
}

const remove = (req, res) => {
    Hour.remove({_id: req.params.hourId}).then(() => {
        res.json({
            "status": "success",
            "msg": "hour deleted"
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