alert('Bem vindo ao jogo do número secreto');
console.log('primeira string deu certo');
let numeroSecreto = 12;
console.log('o numero secreto é:?', numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30'); 
console.log('Resultado da comparação:', chute == numeroSecreto);
//console abaixo referenciando o valor que o usuario inseriu
console.log(`usuario chutou ${chute}`)
//se chute for igual ao numeroSecreto
if (chute == numeroSecreto) {
    alert(`Isso ai, você acertou o número secreto! ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}
console.log('done');