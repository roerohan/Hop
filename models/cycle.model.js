// cycle.model.js
const mongoose = require('mongoose');
// Declare the Schema of the Mongo model
var cycleSchema = new mongoose.Schema({
    uniqueID: {             /* For user reference */
        type: String,
        required: true,
        unique: true,
    },
    modelName: {
        type: String,
        required: true
    },
    tripsCompleted: {
        type: String,
    },
});

// Export the model
module.exports = mongoose.model('Cycle', cycleSchema);
