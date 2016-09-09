var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(defaultDestinations);
});

var defaultDestinations = [
    {
        id:"001",
        name: "Alaska",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"002",
        name: "Bahamas",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"003",
        name: "Mediterranean",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"004",
        name: "South Pacific",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"005",
        name: "Tranatlantic Routes",
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"006",
        name: "Turks and Caicos",
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"007",
        name: "Bangalore",
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    }
];

module.exports = router;
