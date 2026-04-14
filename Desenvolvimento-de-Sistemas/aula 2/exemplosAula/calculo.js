const nome = "Gabriel";
const idade = 15;

const nomeIdade = ()=>{
    console,console.log(`A idade de ${nome} é ${idade}`);
}

module.exports = { nome, idade, nomeIdade} // Impotante: modo de como exportar informações para outro arqui. exem: calculo.js(idade) ---> main.js