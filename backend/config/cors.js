const corsConfig = {
    credentials: true,
    origin: [process.env.CLIENT_URI, process.env.SERVER_URI]
}

module.exports = corsConfig