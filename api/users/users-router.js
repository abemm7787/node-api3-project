const express = require('express');
const router = express.Router();
const user = require('./users-model');
const Post = require('../posts/posts-model');
// to  1000 hours of code 🍻
const { validateUserId, validateUser,validatePost} = require('../middleware/middleware');

router.get('/', (req, res, next) => {
  // returns array of users
  user.get()
  .then(users => {
  res.json(users)
    })
    .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
  res.json(req.user)
});

router.post('/', validateUser, (req, res, next) => {
  user.insert(req.body)
    .then(vaild => {
      res.status(200).json(vaild)
    })
    .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  
  user.update(req.params.id, req.body)
    .then(() => {
      return user.getById(req.params.id)
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(next)
});

router.delete('/:id', validateUserId, (req, res , next) => {
   user.remove(req.params.id)
  .then(() => res.status(200).json(req.user))
.catch(next)
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
user.getUserPosts(req.user.id)
.then((post) => res.status(200).json(post))
.catch(next);
  
    //res.json(req.users.id)

});

router.post('/:id/posts', validateUserId, validatePost, async (req, res, next) => {

  try {
    const result = await Post.insert({
      user_id: req.params.id, text: req.text
    })
    res.status(201).json(result)
  } catch(err){next(err)}
});


router.use((err, req, res) => {
  res.status(err.status || 500).json({
    customMessage: 'something tragic occurred',
    message: err.message,

  })
})


module.exports = router;