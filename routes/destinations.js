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
        description: 'Alaska, northwest of Canada, is the largest and most sparsely populated U.S. state.',
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"002",
        name: "Bahamas",
        description: 'The Bahamas is a coral-based archipelago in the Atlantic Ocean. Its 700-plus islands and cays range from uninhabited to packed with resorts. ',
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"003",
        name: "Mediterranean",
        description: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Southern Europe and Anatolia, on the south by North Africa, and on the east by the Levant.',
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"004",
        name: "South Pacific",
        description: 'South Pacific is a musical composed by Richard Rodgers, with lyrics by Oscar Hammerstein II and book by Hammerstein and Joshua Logan.',
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"005",
        name: "Tranatlantic Routes",
        description: 'The Atlantic Ocean is the second largest of the worlds oceanic divisions, following the Pacific Ocean.',
        primary: true,
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"006",
        name: "Turks and Caicos",
        description: 'Turks and Caicos is an archipelago of 40 low-lying coral islands in the Atlantic Ocean, a British Overseas Territory southeast of the Bahamas. The gateway island of Providenciales, known as Provo, is home to expansive Grace Bay Beach, with luxury resorts, shops and restaurants. Scuba-diving sites include a 14-mile barrier reef on Provo’s north shore and a dramatic 2,134m underwater wall off Grand Turk island.',
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    },
    {
        id:"007",
        name: "India",
        description: 'India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia.',
        thumbnail: 'http://dummyimage.com/400x200/cccccc/888888.png'
    }
];

module.exports = router;
