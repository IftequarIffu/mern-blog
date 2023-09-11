const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsConfig = require('./config/cors')
const passport = require('passport')
require('./config/oauth')

const userRouter = require('./routes/userRoutes')


const port = process.env.EXPRESS_PORT || 4321

const app = express()

connectDB()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors(corsConfig))
app.use(passport.initialize());
app.use(cookieParser())


app.use('/', userRouter)



app.get('/', (req, res) => {
    res.json("Hello World")
})


app.use(errorHandler)

app.listen(port, () => {
    console.log(`API started on port ${port} successfully`)
})
