const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')
const AuthMiddleware = require('../middleware/auth')

router.get('/', AuthMiddleware, UserController.get)
router.put('/', AuthMiddleware, UserController.update)

module.exports = router