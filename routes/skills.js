var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')
// All routes start with the path of '/todos'

// GET /todos (index functionality - list all todos)
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality - show a single todo)
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// PUT / skills
router.put('/:id', skillsCtrl.update);
module.exports = router;
