const express = require('express')
const path = require('path')

const carRoutes = require('./routes/cars')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cars', carRoutes)

module.exports = server
