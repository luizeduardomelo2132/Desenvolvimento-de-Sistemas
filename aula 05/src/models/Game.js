const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    name: String,
    genre: String,
    year: Number,
    isActive: { type: Boolean, default: true }
});

module.exports = Game;