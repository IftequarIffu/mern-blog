const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const protect = async (req, res, next) => {

    try {
        const token = req.cookies.jwt
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId
        const user = await userModel.findById(userId).select('-password')
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        next(new Error(error)) 
    }
}

module.exports = protect