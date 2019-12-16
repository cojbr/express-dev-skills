var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controller/skills');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Codys Dev Skills"});
});

module.exports = router;
