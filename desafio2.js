// Dia da semana
diaDaSemana = prompt('Qual é o dia da Semana?');

if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!')
}


// Número negativo ou positivo
numero = prompt('Digite um número positivo ou negativo: ')

if (numero >= 0) {
    alert('Este número é positivo')
} else {
    alert('Este número é negativo')
}


// Pontuacao
pontuacao = prompt('Digite sua pontuação')

if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}


// Saldo conta
let saldoConta = 500;

alert('Seu saldo em conta é R$' + saldoConta);


// Nome e boas vindas
nomeUsuario = prompt('Insira seu nome');

alert('Boas vindas, ' + nomeUsuario);