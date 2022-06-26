const express = require('express')
const router = express.Router()
const UserController = require('../controllers/auth.controller')

router.post('/login', UserController.login)
router.post('/', UserController.register)

module.exports = router