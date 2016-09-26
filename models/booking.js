var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the booking schema
var bookingSchema = new Schema({
    // _id by default
    tripId: { type: String, required: true },
    fullName: String,
    emailAddress: String,
    country: String,
    province: String,
    streetAddress: String,
    postalCode: String,
    passengerCount: Number,
    roomCount: Number,
    roomType: String,
    totalCost: Number
});

var Booking = mongoose.model('Booking', bookingSchema);

// Make this available to our users
module.exports = Booking;

