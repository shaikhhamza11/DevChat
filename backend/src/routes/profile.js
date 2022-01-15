const router =require('express').Router()
const ProfileController = require('../controllers/profile')
//test route 
 router.get('/',ProfileController.getProfile)


module.exports = router