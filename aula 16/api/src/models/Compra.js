const mongoose = require('mongoose');

const Compra = mongoose.model('Compra', {
    clientId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    produtoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    },
    quantidade: Number,

    data: {
        type: Date,
        default: Date.now()

    }
})

module.exports = Compra;