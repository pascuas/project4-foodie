const Restaurant = require('../models/restaurant')

const getAll = (req, res) => {
    Restaurant.find({}).populate([{
        path: 'review',
        model: 'Review'
    },  {
        path: 'image',
        model: 'Image'
    }]).then(restaurants => res.json(restaurants))
}

const getById = (req, res) => {
    Restaurant.findById(req.params.id).populate([{
        path: 'review',
        model: 'Review'
    },  {
        path: 'image',
        model: 'Image'
    }]).then(restaurant => res.json(restaurant))
}

const create = (req, res) => {
    Restaurant.create(req.body).then(restaurant => res.json(restaurant))
}

const update = (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body).then(restaurant => res.json(restaurant))
}

const remove = (req, res) => {
    Restaurant.remove({_id: req.params.id}).then(() => {
        res.json({
            "status": "success",
            "msg": "restaurant deleted"
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