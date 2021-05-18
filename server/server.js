//@ts-check

const express = require("express");
const session = require("express-session");
const path = require("path");
const FileStore = require("session-file-store")(session);

const carRoutes = require("./routes/cars");
const authRoutes = require("./routes/users");
const profileRoutes = require("./routes/profile");
const registrationRoutes = require("./routes/registration");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

const fileStoreOptions = {};

server.use(session({
    store: new FileStore(fileStoreOptions),
    secret: "kioiuj98uy86gtp5rtg",
    resave: true,
    saveUninitialized: false,
}));

server.use("/api/v1/cars", carRoutes);
server.use("/api/v1/auth", authRoutes);
server.use("/api/v1/profile", profileRoutes);
server.use("/api/v1/registration", registrationRoutes);

module.exports = server
