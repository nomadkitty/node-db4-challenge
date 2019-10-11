const express = require("express");
const helmet = require("helmet");

const recipeRouter = require("./recipes/recipe-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("<h1>Server is working!</h1>");
});

module.exports = server;
