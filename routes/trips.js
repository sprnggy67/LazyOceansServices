var express = require('express');
var router = express.Router();

/* GET trips listing. */
router.get('/', function(req, res, next) {
    // Get the search parameters
    var destinationId = req.query.destinationId;
    var startDate = req.query.startDate;

    // Perform the search
    var result = [];
    trips.forEach(function(trip) {
        if (destinationId && destinationId != trip.destinationId)
            return;
        if (startDate && startDate > trip.startDate)
            return;
        result.push(trip);
    });

    res.json(result);
});

var trips = [
    {
        id:"001.1",
        headline: '3 Night Alaskan Cruise',
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        destinationId:"001",
        startingPrice: 2599.00,
        discount: 30,
        startDate: '2016-10-03',
        endDate: '2016-10-06',
        starRating: 3,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"001.2",
        headline: '5 Night Alaskan Cruise',
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        destinationId:"001",
        startingPrice: 3599.00,
        discount: 30,
        startDate: '2016-10-06',
        endDate: '2016-10-11',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"001.3",
        headline: '3 Night Alaskan Cruise',
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        destinationId:"001",
        startingPrice: 2599.00,
        discount: 30,
        startDate: '2016-10-10',
        endDate: '2016-10-13',
        starRating: 3,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"001.4",
        headline: '3 Night Alaskan Cruise',
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        destinationId:"001",
        startingPrice: 2599.00,
        discount: 30,
        startDate: '2016-10-17',
        endDate: '2016-10-20',
        starRating: 3,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"001.5",
        headline: '3 Night Alaskan Cruise',
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        destinationId:"001",
        startingPrice: 2599.00,
        discount: 30,
        startDate: '2016-10-24',
        endDate: '2016-10-27',
        starRating: 3,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"002.1",
        headline: '7 Night Bahamian Cruise',
        description: 'The Bahamas is a coral-based archipelago in the Atlantic Ocean. Its 700-plus islands and cays range from uninhabited to packed with resorts. ',
        destinationId:"002",
        startingPrice: 2399.00,
        discount: 33,
        startDate: '2016-10-1',
        endDate: '2016-10-8',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"002.2",
        headline: '7 Night Bahamian Cruise',
        description: 'The Bahamas is a coral-based archipelago in the Atlantic Ocean. Its 700-plus islands and cays range from uninhabited to packed with resorts. ',
        destinationId:"002",
        startingPrice: 2399.00,
        discount: 33,
        startDate: '2016-10-8',
        endDate: '2016-10-15',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"002.3",
        headline: '7 Night Bahamian Cruise',
        description: 'The Bahamas is a coral-based archipelago in the Atlantic Ocean. Its 700-plus islands and cays range from uninhabited to packed with resorts. ',
        destinationId:"002",
        startingPrice: 2399.00,
        discount: 33,
        startDate: '2016-10-15',
        endDate: '2016-10-22',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"002.4",
        headline: '7 Night Bahamian Cruise',
        description: 'The Bahamas is a coral-based archipelago in the Atlantic Ocean. Its 700-plus islands and cays range from uninhabited to packed with resorts. ',
        destinationId:"002",
        startingPrice: 2399.00,
        discount: 33,
        startDate: '2016-10-22',
        endDate: '2016-10-29',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"003.1",
        headline: '5 Night Mediterrean Cruise',
        description: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Southern Europe and Anatolia, on the south by North Africa, and on the east by the Levant.',
        destinationId:"003",
        startingPrice: 2699.00,
        discount: 25,
        startDate: '2016-10-01',
        endDate: '2016-10-06',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"003.2",
        headline: '5 Night Mediterrean Cruise',
        description: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Southern Europe and Anatolia, on the south by North Africa, and on the east by the Levant.',
        destinationId:"003",
        startingPrice: 2699.00,
        discount: 25,
        startDate: '2016-10-08',
        endDate: '2016-10-13',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"003.3",
        headline: '5 Night Mediterrean Cruise',
        description: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Southern Europe and Anatolia, on the south by North Africa, and on the east by the Levant.',
        destinationId:"003",
        startingPrice: 2699.00,
        discount: 25,
        startDate: '2016-10-15',
        endDate: '2016-10-20',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"003.4",
        headline: '5 Night Mediterrean Cruise',
        description: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Southern Europe and Anatolia, on the south by North Africa, and on the east by the Levant.',
        destinationId:"003",
        startingPrice: 2699.00,
        discount: 25,
        startDate: '2016-10-22',
        endDate: '2016-10-27',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"004.1",
        headline: '7 Night South Pacific Cruise',
        description: 'South Pacific is a musical composed by Richard Rodgers, with lyrics by Oscar Hammerstein II and book by Hammerstein and Joshua Logan.',
        destinationId:"004",
        startingPrice: 3839.00,
        discount: 33,
        startDate: '2016-10-02',
        endDate: '2016-10-09',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"004.2",
        headline: '7 Night South Pacific Cruise',
        description: 'South Pacific is a musical composed by Richard Rodgers, with lyrics by Oscar Hammerstein II and book by Hammerstein and Joshua Logan.',
        destinationId:"004",
        startingPrice: 3839.00,
        discount: 33,
        startDate: '2016-10-16',
        endDate: '2016-10-23',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"004.3",
        headline: '7 Night South Pacific Cruise',
        description: 'South Pacific is a musical composed by Richard Rodgers, with lyrics by Oscar Hammerstein II and book by Hammerstein and Joshua Logan.',
        destinationId:"004",
        startingPrice: 3839.00,
        discount: 33,
        startDate: '2016-10-30',
        endDate: '2016-11-06',
        starRating: 4,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"007.1",
        headline: '2 Night Indian Getaway',
        description: 'Join us for two nights in the Consul Generals flat, together with multiple cats and a Sony entertainment system.',
        destinationId:"007",
        startingPrice: 11.99,
        discount: 33,
        startDate: '2016-12-15',
        endDate: '2016-12-17',
        starRating: 2,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    }
];

module.exports = router;
