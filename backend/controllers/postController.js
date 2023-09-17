const asyncHandler = require('express-async-handler')
const postModel = require('../models/postModel')
const cloudinary = require('../config/cloudinary')

const getPosts = (asyncHandler(async (req, res) => {

    try {
        const posts = await postModel.find()
        res.status(200)
        res.json(posts)
    } catch (error) {
        throw new Error(error)
    }
}))

const getPostById = (asyncHandler(async (req, res) => {

    
    try {

        const postId = req.params.postId
        // res.json(req.params.postId)
        // console.log(postId)
        const post = await postModel.findById(postId)
        
        res.json(post)
        res.status(200)
    } catch (error) {
        throw new Error(error)
    }
}))



const createPost = (asyncHandler(async (req, res) => {

    try {
        const {title, summary, content} = req.body
        if(!title || !summary || !content){
            throw new Error("Give all the inputs properly")
        }

        // Image uploading
        const b64 = Buffer.from(req.file.buffer).toString("base64")
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64


        const cloudinary_result = await cloudinary.uploader.upload(dataURI, { 
            folder:'mern-blog_post-image',
            resource_type: "auto"
        })
        const newPost = await postModel.create({title, summary, bannerPic: { public_id: cloudinary_result.public_id, url: cloudinary_result.secure_url}, content})
        res.status(200)
        res.json(newPost)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}))

module.exports = {getPosts, createPost, getPostById}