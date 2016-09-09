var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(defaultLifeOnBoardTopics);
});

var defaultLifeOnBoardTopics = [
    {
        id:"001",
        name: "Dining",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"002",
        name: "Entertainment",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"003",
        name: "Accomodation",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    }
];

module.exports = router;
