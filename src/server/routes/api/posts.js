const mongoose = require('mongoose');
const router = require('express').Router();

const Posts = mongoose.model('Posts');

router.post('/', (req, res) => {
  const { body: { post } } = req;
  if (!req.cookies.userid) res.status(401).send();

  const finalPost = new Posts(post);

  finalPost.setAuthor(req.cookies.userid);
  return finalPost.save()
    .then(() => res.send('Post created'))
    .catch(err => res.status(409).send(err.errmsg));
});
router.get('/:post_id', (req, res) => {
  const id = req.params.post_id;
  Posts.findOne({ id })
    .then((result) => {
      if (result) res.json(result);
      else res.status(404).send();
    });
});

module.exports = router;
