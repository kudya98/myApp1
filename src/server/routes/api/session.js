const mongoose = require('mongoose');
const router = require('express').Router();

const Users = mongoose.model('Users');

router.get('/', (req, res, next) => {
  if (req.cookies.userid) res.status(200).send();
  else res.status(401).send();
});
router.post('/', (req, res, next) => {
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
  Users.findOne({ email: user.email })
    .then((result) => {
      if (!result || !result.validatePassword(user.password)) {
        res.send('Wrong email or password');
      } else res.cookie('userid', result.id, { expires: new Date(Date.now() + 100000000), httpOnly: true }).send();
    });
});
router.delete('/', (req, res, next) => {
  if (req.cookies.userid) res.clearCookie('userid').send();
  else res.status(401).send();
});
module.exports = router;
