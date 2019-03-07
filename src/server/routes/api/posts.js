const path = require('path');
const mongoose = require('mongoose');
const router = require('express').Router();

const Posts = mongoose.model('Posts');


router.post('/', (req, res) => {
  const { body: { post } } = req;
  if (!req.cookies.userid) res.status(401).send();
  const finalPost = new Posts({ ...post, ...{ author: req.cookies.userid } });
  finalPost.save()
    .then(() => res.send('PostPreview created'))
    .catch(err => res.status(409).send(err.errmsg));
});
router.get('/', (req, res) => {
  Posts.find({}, {}, {
    skip: 0,
    limit: 10,
    sort: {
      visitors: -1 // Sort DESC
    }
  }, (err, result) => {
    const posts = [];
    result.forEach(
      (post) => {
        posts.push({
          id: post.id,
          title: post.title,
          text: post.text,
          date: post.date,
          author: post.author.login,
          visitors: post.visitors
        });
      }
    );
    return res.json(posts);
  });
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
