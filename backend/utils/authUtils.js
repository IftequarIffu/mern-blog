const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const hashPassword = (password) => {

    return bcrypt.hashSync(password)
}

const comparePassword = (password, hash) => {

    return bcrypt.compareSync(password, hash)
}

const generateToken = (payload) => {

    const token = jwt.sign(payload, process.env.JWT_SECRET)
    return token
}

module.exports = {hashPassword, generateToken, comparePassword}