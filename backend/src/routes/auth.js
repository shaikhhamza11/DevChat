const router =require('express').Router()
//loading controllers
const AuthController= require('../controllers/auth')
//test route

router.get('/',AuthController.getAuth)

module.exports= router