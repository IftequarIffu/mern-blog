const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsConfig = require('./config/cors')
const passport = require('passport')
require('./config/oauth')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({storage})


const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
const protect = require('./middleware/authMiddleware')


const port = process.env.EXPRESS_PORT || 4321

const app = express()

connectDB()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsConfig))
app.use(passport.initialize());
app.use(cookieParser())


// Fix for cors error when deploying on vercel.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.CLIENT_URI)
    res.header("Access-Control-Allow-Credentials", true)
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT", "POST", "PATCH", "DELETE", "GET")
        return res.status(200).json({})
    }
    next()
})

app.use('/', userRouter)
app.use('/posts', postRouter)


app.get('/', (req, res) => {
    res.json("Hello World")
})

app.use(protect)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`API started on port ${port} successfully`)
})

module.exports = app