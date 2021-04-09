const express = require('express')
const path = require('path')

const carRoutes = require("./routes/cars")
const authRoutes = require("./routes/users")

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use("/api/v1/cars", carRoutes)
server.use("/api/v1/auth", authRoutes)

module.exports = server
