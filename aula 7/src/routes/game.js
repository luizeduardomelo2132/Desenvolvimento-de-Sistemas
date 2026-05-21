const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

router
    .get('/game', GameController.getAll)
    .post('/game', GameController.create)
    .get('/game/:id', GameController.getById)
    .put('/game/:id', GameController.update)
    .delete('/game/:id', GameController.delete)

module.exports = router;