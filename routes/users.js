var express = require('express');
var router = express.Router();

var nextId = 0;
var users = [ ];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(users);
});

// CREATE a user
router.post('/:name', function(req, res) {
    var user = { id: nextId, name: req.params.name };
    ++ nextId;
    users.push(user);
    res.json(user);
});

// DELETE a user
router.delete('/:todo_id', function(req, res) {
    var id = req.params.todo_id;
    var user = null;
    var index = -1;
    var arrayLength = users.length;
    for (var i = 0; i < arrayLength; i++ ) {
        if (users[i].id == id) {
            index = i;
            break;
        }
    }
    if (index >= 0) {
        user = users[index];
        users.splice(index, 1);
    }
    res.json(user);
});


module.exports = router;
