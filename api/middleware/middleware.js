const User = require('../users/users-model');
// const Post = require('../posts/posts-model');


async function validateUserId(req, res, next) {

  try {
    const {id} = req.params.id // deconstructing requested id
    const userId = await User.getById(req.params.id) 
    if (!userId) {res.status(404).json({message: `user with id  ${id} not found`})} 
     else {
     req.user = userId
    next()
    }
  } catch (err) {
    res.status(500).json({
      message: 'There was a problem finding the user.'
    })
  }
}

function validateUser(req, res, next) {

  // derives from database 
  const {name} = req.body
  if (!name){ res.status(400).json({ message: 'missing required name field' })
  } else {
    req.name = name
    next()
  }
}

function validatePost(req, res, next) {
  const { text } = req.body
  if (!text) {
    res.status(400).json({ message: 'missing required text field' })
  } else {
    req.text = text
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = {

  validateUserId,
  validateUser,
  validatePost
}