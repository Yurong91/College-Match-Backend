const express = require('express')
const router = express.Router()
const schoolsCtrl = require('../../controllers/api/schools')

//GET /api/v1/schools
router.get('/', schoolsCtrl.index)
//POST /api/v1/schools
router.post('/', schoolsCtrl.create)
//PUT /api/v1/schools/:id
router.put('/:id', schoolsCtrl.update)
//DELLTE /api/v1/schools/:id
router.delete('/:id', schoolsCtrl.remove)

module.exports = router