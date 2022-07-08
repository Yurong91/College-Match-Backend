const { Router } = require('express')
const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

//POST /api/v1/users
router.post('/', usersCtrl.create)
//POST /api/v1/users/login
router.post('/login', usersCtrl.login)

//Below routes needs authorized users
//GET /api/v1/users/:id
router.get('/:id', ensuredLoggedIn, usersCtrl.show)
//GET /api/v1/users/:id/myList
router.get('/:id/myList', ensureLoggedIn, usersCtrl.getMyList)
//PUT /api/v1/users/:id
router.put('/:id', ensureLoggedIn, usersCtrl.update)

module.exports = router