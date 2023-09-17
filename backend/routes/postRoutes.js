
const express = require('express')
const { getPosts, createPost, getPostById } = require('../controllers/postController')
// const  upload  = require('../server')

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({storage, limits: { fieldSize: 100 * 1024 * 1024 }})

const postRouter = express.Router()

postRouter.get('/', getPosts)
postRouter.post('/new', upload.single("bannerPic"), createPost)
postRouter.get('/:postId', getPostById)

module.exports = postRouter