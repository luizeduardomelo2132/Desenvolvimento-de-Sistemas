const express = require('express');
const produtoRouter = require('../src/routes/ProdutoRouter');

module.exports = (app) => {
    app.use(express.json());
    app.use('/produto', produtoRouter);
    app.use('/cliente', require('../src/routes/ClienteRouter'));
    app.use('/compra', require('../src/routes/CompraRouter'));
};
