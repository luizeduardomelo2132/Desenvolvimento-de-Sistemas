const express = require('express');
const personRoutes = require('../src/routes/person');
const gameRoutes = require('../src/routes/game');

module.exports = (app) => {
    app.use(express.json());
    app.use('/person', personRoutes);
    app.use('/game', gameRoutes);
};