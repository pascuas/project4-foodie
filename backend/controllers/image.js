const Image = require('../models/image')
const Restaurant = require('../models/restaurant')

const getAll = (req, res) => {
    Image.find({}).then(images => res.json(images))
}

const getById = (req, res) => {
    Image.findById(req.params.imageId).then(image => {
        res.json(image)
    })
}

const create = (req, res) => {
    Image.create(req.body).then(image => Restaurant.findOne({_id: req.params.resId}).then(restaurant => {
        restaurant.Images.push(image._id)
        restaurant.save()
        res.json(restaurant)
    }))
}

const update = (req, res) => {
    Image.updateOne({_id: req.params.imageId}, {"$set": req.body}).then(image => res.json(image))
}

const remove = (req, res) => {
    Image.remove({_id: req.params.imageId}).then(() => {
        res.json({
            "status": "success",
            "msg": "image deleted"
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