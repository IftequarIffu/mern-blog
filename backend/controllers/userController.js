const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const {hashPassword, generateToken, comparePassword } = require('../utils/authUtils')



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
            console.log(userId)
            const token = generateToken({userId: userId})
            console.log(token)
            res.cookie('jwt', token, {
                expiresIn: '30d'
            })

            res.status(200)
            res.json("Login successful")
        }
    }

    res.status(400)
    throw new Error("Something went wrong")
})




module.exports = { loginMethod, registerMethod }