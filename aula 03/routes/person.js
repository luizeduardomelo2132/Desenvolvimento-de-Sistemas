const express = require('express');
const router = express.Router();
 
const Pessoas = []

router
    .get('/api/person/first', (req, res) => {
		res.send('Hello World')
    })
    .get('', (req, res) => {
		res.send('cheguei')
    })
    .get('/soma/:num/:num2', (req, res) => {
        const { num, num2 } = req.params;
        res.send(`A soma é ${parseInt(num) + parseInt(num2)}`)
    })
    .post('/pessoa', (req, res) => {
      const {nome, idade} = req.body;
      if (!nome || !idade) {
        res.status(400).send({messge: "Dados Invalidos"})
      }

      const pessoa = {
      id: Pessoas.length,
      nome: nome,
      idade: idade
      }

      Pessoas.push(pessoa)
      res.send('Pessoa inserida com sucesso')
    })
    .get('/pessoa', (req, res) => {
      res.send(Pessoas)
    })

module.exports = router
