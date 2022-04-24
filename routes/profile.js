const express = require('express');

const { isLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
  res.render('profile', { title: '? ???. - NodeBird' });
});


module.exports = router;
