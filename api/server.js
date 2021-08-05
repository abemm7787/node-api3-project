const express = require('express');

const userRouter = require("./users/users-router")

const server = express();

server.use(express.json())

server.use("/api/users", userRouter)

server.use(logger)



// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});



function logger(req,res, next ){
  console.log(`[${req.method}] ${req.url}`)
}

module.exports = server;
