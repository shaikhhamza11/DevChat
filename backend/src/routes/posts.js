const router = require('express').Router()
const PostController = require('../controllers/posts')

router.get('/',PostController.getPosts)

module.exports= router