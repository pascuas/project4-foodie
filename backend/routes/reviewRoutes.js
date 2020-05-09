const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/review')


router.get('/', reviewController.getAll)
router.get('/:reviewId', reviewController.getById)
router.post('/:resId', reviewController.create)
router.put('/:reviewId', reviewController.update)
router.delete('/:reviewId', reviewController.remove)


module.exports = router
