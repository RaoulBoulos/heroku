const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantReviewSchema = new Schema({
    stars: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const restaurantReview = mongoose.model('Review', restaurantReviewSchema);

module.exports = restaurantReview;