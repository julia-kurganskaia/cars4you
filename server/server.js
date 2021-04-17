//@ts-check

const express = require("express");
const session = require("express-session");
const path = require("path");

const carRoutes = require("./routes/cars");
const authRoutes = require("./routes/users");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

server.use(session({
    secret: "kioiuj98uy86gtp5rtg",
    resave: true,
    saveUninitialized: false,
}));

server.use("/api/v1/cars", carRoutes);
server.use("/api/v1/auth", authRoutes);

module.exports = server
