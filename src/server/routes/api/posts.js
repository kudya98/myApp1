const mongoose = require('mongoose');
const router = require('express').Router();

const Users = mongoose.model('Users');
const Posts = mongoose.model('Posts');

router.post('/', (req, res) => {
  const { body: { post } } = req;
  if (!req.cookies.userid) res.status(401).send();
  const finalPost = new Posts({ ...post, ...{ author: req.cookies.userid } });
  finalPost.save()
    .then(() => res.send('Post created'))
    /* .then(() => {
      Posts
        .findOne({ title: 'title1' })
        .populate('author')
        .exec((err, result) => {
          if (err) return (err);
          console.log('The hash is %s', result.author.hash);
        });
    }) */
    .catch(err => res.status(409).send(err.errmsg));
});
router.get('/:post_id', (req, res) => {
  Posts.findOneAndUpdate({ _id: req.params.post_id }, { $inc: { visitors: 1 } })
    .populate('author')
    .exec((err, result) => {
      if (result) {
        res.json({
          title: result.title,
          text: result.text,
          date: result.date,
          author: result.author.login,
          visitors: result.visitors
        });
      } else res.status(404).send(err);
    });
});

module.exports = router;
