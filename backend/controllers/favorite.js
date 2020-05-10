const express = require('express')
const Favorite = require('../models/favorite')

const getAll = (req,res) => {
    Favorite.find().then(favorites => {
        res.json(favorites)
    })
}

const createFavorite = (req,res) => {
    Favorite.create(req.body).then(favorite => {
        res.json(favorite)
    })
}

const deleteFavorite = (req,res) => {
    Favorite.findByIdAndDelete(req.params.id).then(() => {
        res.json({
            "status": "success",
            "msg": "favorite deleted"
        })
    })
}

module.exports = {
    getAll,
    createFavorite,
    deleteFavorite
}

