const  findById = require("../users/users-model")

function logger(req, res, next) {
  // DO YOUR MAGIC
}

async function validateUserId(req, res, next) {
  try {
    const user = await findById.getById(req.params.id)
    if(!user) {
    res.status(404).json({message: 'user nowhere to found'})
    } else {
      req.user = user
      res.status(200).json(user)
      next()
    }
  } catch (err) {
    res.status(500).json({message: 'can not find user'})
  } 
}


  // DO YOUR MAGIC


function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules



module.exports={ 
  logger,
  validateUserId,
  validateUser,
  validatePost,

}