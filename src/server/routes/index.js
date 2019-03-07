const path = require('path');
const express = require('express');

const router = express.Router();

router.use('/api', require('./api'));

router.use(express.static('dist'));
router.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../../', 'public', 'index.html'));
});
module.exports = router;
