const corsConfig = {
    credentials: true,
    origin: [process.env.CLIENT_URI, process.env.SERVER_URI],
    preflightContinue: true,
    methods: "GET, PUT, POST, HEAD, PATCH, DELETE"
}

module.exports = corsConfig