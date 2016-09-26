var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Booking = mongoose.model('Booking');

/* GET a booking */
router.get('/:bookingId', function(req, res, next) {

    // Get the search parameters
    var bookingId = req.params.bookingId;

    // Create the search query
    var query = {
        _id: bookingId
    };

    // Perform the search
    Booking.find(query, function(err, bookings) {
        if (err)
            res.send(err);

        return res.json(bookings[0]);
    });
});

/* POST a booking */
router.post('/', function(req, res, next) {

    // Get the booking data.
    var tripId = req.body.tripId;
    if (!tripId) {
        return res.status(400).send("Please specify a tripId");
    }

    // Create the new object body
    var newBooking = null;
    try {
        var newBooking = new Booking({
            tripId: tripId,
            fullName: req.body.fullName,
            emailAddress: req.body.emailAddress,
            country: req.body.country,
            province: req.body.province,
            streetAddress: req.body.streetAddress,
            postalCode: req.body.postalCode,
            passengerCount: Number(req.body.passengerCount),
            roomCount: Number(req.body.roomCount),
            roomType: req.body.roomType,
            totalCost: 4599.00
        });
    } catch(err) {
        console.log('Error in post booking: ' + err);
        res.send(err);
        return;
    }

    // Save the object
    newBooking.save(function(err) {
        if (err) {
            console.log('Error in post booking: ' + err);
            res.send(err);
            return;
        }

        console.log("Booking created");
        return res.json(newBooking);
    });
});

module.exports = router;
