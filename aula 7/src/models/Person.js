const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    lastName: String,
    age: Number,
    isActive: { type: Boolean, default: true }
});

module.exports = Person;