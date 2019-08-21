// trip.model.js
const mongoose = require('mongoose');
// Declare the Schema of the Mongo model
var tripSchema = new mongoose.Schema({
    pickup: {
        type: String,       /* Foreign Key */
        required: true,
    },
    destination: {
        type: String,       /* Foreign Key */
        required: true,
    },
    userID: {
        type: String,       /* Foreign Key */
        required: true,
    },
    cycleID: {
        type: String,       /* Foreign Key */
        required: true,
    },
});

// Export the model
module.exports = mongoose.model('Trip', tripSchema);
