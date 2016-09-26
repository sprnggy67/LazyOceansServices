var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');

/* GET trips listing. */
router.get('/:tripId', function(req, res, next) {

    // Get the search parameters
    var tripId = req.params.tripId;

    // Create the search query
    var query = {
        id: tripId
    };

    // Perform the search
    Trip.find(query, function(err, trips) {
        if (err)
            res.send(err);

        return res.json(trips[0]);
    });
});

router.get('/', function(req, res, next) {

    // Get optional search parameters
    var destinationId = req.query.destinationId;
    var startDate = req.query.startDate;

    // Create the search query
    var query = {};
    if (destinationId) {
        query.destinationId = destinationId;
    }
    if (startDate) {
        query.startDate = {$gte: startDate};
    }

    // Perform the search
    Trip.find(query, function(err, trips) {
        if (err)
            res.send(err);

        return res.json(trips);
    });
});

module.exports = router;
