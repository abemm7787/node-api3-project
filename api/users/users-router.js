const express = require('express');
const users = require("./users-model")
const { logger,validateUserId,validateUser, validatePost} = require("../middleware/middleware")
  

// heres to 1000 hours of code 🍻


// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/',  validateUserId, (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  users.get()
  .then(data => {

    res.json(data)
  })
  .catch(()=> {
    res.status(404).json({
      message: "does not exists"
    })
  })
})
  

router.get("/id:", (req, res, next) =>{

  users.getById(req.paramas.id)
  .then(data => {
    res.json(data)
  })
  .catch(next)

})



router.get('/:id', (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id

  next()
});

router.post('/', (req, res ,next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  next()
});

router.put('/:id', (req, res , next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid

  next()
});

router.delete('/:id', (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  next()
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  next()
});

router.post('/:id/posts', (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  next()
});

// do not forget to export the router


module.exports = router