var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controller/skills');

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

router.get('/new', skillsCtrl.newSkill);
router.post('/', skillsCtrl.createSkill);
router.get('/:id/edit', skillsCtrl.editSkill);
router.put('/:id', skillsCtrl.updateSkill);
router.delete('/:id', skillsCtrl.deleteSkill);


module.exports = router;