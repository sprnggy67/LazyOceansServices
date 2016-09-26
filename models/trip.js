var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the trips schema
var tripSchema = new Schema({
    id: { type: String, required: true, unique: true},
    headline: String,
    description: String,
    destinationId: String,
    startingPrice: Number,
    discount: Number,
    startDate: String,
    endDate: String,
    starRating: Number,
    thumbnail: String
});

var Trip = mongoose.model('Trip', tripSchema);

// Make this available to our users
module.exports = Trip;

// Seed the database
Trip.count({}, function(err, count) {
    if (count == 0) {
        console.log('Seeding trip data');
        Trip.create(sampleTrips, function(err) {
            if (err) throw err;
        });
    }
});

// Sample trip data
var sampleTrips = [
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
        id:"005.1",
        headline: '8 Night Transatlantic Crossing (East to West)',
        description: 'Travel through time with the pioneers of ocean crossing, in this special trip from Southampton to New York City',
        destinationId:"005",
        startingPrice: 3839.00,
        discount: 33,
        startDate: '2016-10-03',
        endDate: '2016-10-11',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"005.2",
        headline: '8 Night Transatlantic Crossing (West to East)',
        description: 'Travel through time with the pioneers of ocean crossing, in this special trip from New York City to Southampton',
        destinationId:"005",
        startingPrice: 3839.00,
        discount: 33,
        startDate: '2016-10-03',
        endDate: '2016-10-11',
        starRating: 5,
        thumbnail: 'http://dummyimage.com/600x300/cccccc/888888.png'
    },
    {
        id:"006.1",
        headline: '5 Night Cruise in the Turks and Caicos',
        description: 'Turks and Caicos is an archipelago of 40 low-lying coral islands in the Atlantic Ocean, a British Overseas Territory southeast of the Bahamas. The gateway island of Providenciales, known as Provo, is home to expansive Grace Bay Beach, with luxury resorts, shops and restaurants. Scuba-diving sites include a 14-mile barrier reef on Provo’s north shore and a dramatic 2,134m underwater wall off Grand Turk island.',
        destinationId:"006",
        startingPrice: 2895.00,
        discount: 33,
        startDate: '2016-10-17',
        endDate: '2016-10-22',
        starRating: 3,
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
