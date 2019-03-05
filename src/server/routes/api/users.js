const mongoose = require('mongoose');
const router = require('express').Router();

const Users = mongoose.model('Users');
const Posts = mongoose.model('Posts');

router.put('/', (req, res, next) => {
  const { body: { user } } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);
  finalUser.setPassword(user.password);
  return finalUser.save()
    .then(() => res.send('User created'))
    .catch(err => res.status(409).send(err));
});

router.get('/:user_login', (req, res, next) => {
  Posts
    .find()
    .populate('author')
    .exec((err, result) => {
      if (err) return (err);
      const posts = [];
      result.forEach(
        (post) => { if (post.author.login === req.params.user_login) posts.push(post); }
      );
      return res.json(posts);
    });
});

module.exports = router;
