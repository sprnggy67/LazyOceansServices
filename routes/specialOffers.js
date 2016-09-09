var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(defaultSpecialOffers);
});

var defaultSpecialOffers = [
    {
        id:"001",
        headline: '3 Night Alaskan Cruise',
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        startingPrice: 2599.00,
        discount: 30,
        startDate: '2015-09-21',
        endDate: '2015-09-24',
        starRating: 3,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"002",
        headline: '7 Night Bahamian Cruise',
        description: 'The Bahamas is a coral-based archipelago in the Atlantic Ocean. Its 700-plus islands and cays range from uninhabited to packed with resorts. ',
        startingPrice: 2399.00,
        discount: 33,
        startDate: '2015-09-21',
        endDate: '2015-09-24',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"003",
        headline: '7 Night South Pacific Cruise',
        description: 'South Pacific is a musical composed by Richard Rodgers, with lyrics by Oscar Hammerstein II and book by Hammerstein and Joshua Logan.',
        startingPrice: 3839.00,
        discount: 33,
        startDate: '2015-10-02',
        endDate: '2015-10-09',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"004",
        headline: '2 Night Indian Getaway',
        description: 'Join us for two nights in the Consul Generals flat, together with multiple cats and a Sony entertainment system.',
        startingPrice: 11.99,
        discount: 33,
        startDate: '2015-12-15',
        endDate: '2015-12-17',
        starRating: 2,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    }
];

module.exports = router;
