const router =require('express').Router()

//controller

const UsersController = require('../controllers/users')


router.get('/',UsersController.getUsers)

module.exports= router