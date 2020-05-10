const express = require('express')
const router = express.Router()
const hourController = require('../controllers/hour')

router.get('/', hourController.getAll)
router.get('/:hourId', hourController.getById)
router.post('/:resId', hourController.create)
router.put('/:hourId', hourController.update)
router.delete('/:hourId', hourController.remove)

module.exports = router