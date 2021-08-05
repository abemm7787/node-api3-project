const {findId} = require("../posts/posts-model")



function logger(req, res, next) {
  // DO YOUR MAGIC



}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  findId(req.params.id)
  .then(users => {
    if(users){
      next()
    }
    else{
      next({ status: 404, message:"Id does not exist "  ` Please correct ${req.params.id} we can not find this`})
    }
  })
.catch(next)
}







function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules




module.exports = { logger, validateUserId,validatePost,validateUser}