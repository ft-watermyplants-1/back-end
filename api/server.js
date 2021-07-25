const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { restricted } = require("./auth/auth-middleware");

const usersRouter = require("./users/users-router");
const plantsRouter = require("./plants/plants-router");
const authRouter = require("./auth/auth-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", restricted, usersRouter);
server.use("/api/users", restricted, plantsRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is up" });
});

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, stack: err.stack });
});

module.exports = server;
