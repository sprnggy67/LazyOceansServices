var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');

/* GET trips listing. */
router.get('/', function(req, res, next) {
    // Get the search parameters
    var destinationId = req.query.destinationId;
    var startDate = req.query.startDate;

    // Create the search query
    var query = {};
    var validQuery = false;
    if (destinationId) {
        validQuery = true;
        query.destinationId = destinationId;
    }
    if (startDate) {
        validQuery = true;
        query.startDate = {$gte: startDate};
    }
    if (!validQuery) {
        return res.status(400).send("Please specify a destinationId or startDate");
    }

    // Perform the search
    Trip.find(query, function(err, trips) {
        if (err)
            res.send(err);

        return res.json(trips);
    });
});

module.exports = router;
