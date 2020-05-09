const express = require('express')
const router = express.Router()
const imageController = require('../controllers/image')


router.get('/', imageController.getAll)
router.get('/:imageId', imageController.getById)
router.post('/:resId', imageController.create)
router.put('/:imageId', imageController.update)
router.delete('/:imageId', imageController.remove)


module.exports = router