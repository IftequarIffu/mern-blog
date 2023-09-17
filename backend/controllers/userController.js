const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const {hashPassword, generateToken, comparePassword } = require('../utils/authUtils')
const jwt = require('jsonwebtoken')



const registerMethod = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Give all the inputs properly")
    }

    const doesUserExist = await userModel.findOne({email})

    if(doesUserExist){
        res.status(400)
        throw new Error("User already exists")
    }
    else{

        const newUser = await userModel.create({name, email, password: hashPassword(password)})
        if(newUser){
            res.status(200)
            res.json("User created!")
        }
    }

    res.status(400)
    throw new Error("Something went wrong")


})


const loginMethod = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("Give all inputs properly")
    }

    const doesUserExist = await userModel.findOne({email})

    if(!doesUserExist){
        res.status(400)
        throw new Error("User doesn't exist")
    }
    else{
        const didPasswordsMatch = comparePassword(password, doesUserExist.password)
        if(!didPasswordsMatch){
            res.status(400)
            throw new Error("Invalid credentials")
        }
        else{
            
            const userId = doesUserExist._id.toString()
            const userName = doesUserExist.name
            // console.log(userId)
            const token = generateToken({userId, userName})
            // console.log(token)
            res.cookie('jwt', token, {
                expiresIn: '30d'
            })

            res.status(200)
            res.json("Login successful")
        }
    }
})

const isLoggedIn = asyncHandler(async(req, res) => {

    try {
        const token = req.cookies.jwt
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId
        const userName = decoded.userName
        res.status(200)
        res.json({
            userId,
            userName
        })


    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error(error)
    }
    

})

const logOut = asyncHandler(async (req, res) => {

    res.cookie('jwt', '')
    res.status(200)
    res.redirect(process.env.CLIENT_URI)

})




module.exports = { loginMethod, registerMethod, isLoggedIn, logOut }