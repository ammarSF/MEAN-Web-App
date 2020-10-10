var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
    name: { type: String },
    city: { type: String }
});

module.exports = mongoose.model('restaurant', restaurantSchema);