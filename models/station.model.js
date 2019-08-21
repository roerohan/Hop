// station.model.js
const mongoose = require('mongoose');
// Declare the Schema of the Mongo model
var stationSchema = new mongoose.Schema({
    venueName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    numberOfCycles: {
        type: String,
    },
});

// Export the model
module.exports = mongoose.model('Station', stationSchema);
