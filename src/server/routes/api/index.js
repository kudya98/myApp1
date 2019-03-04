const express = require('express');
const users = require('./users');
const posts = require('./posts');
const session = require('./session');

const router = express.Router();
router.use('/users', users);
router.use('/posts', posts);
router.use('/session', session);

module.exports = router;
