//Laço de repetição

//WHILE

let count = 0

while(count < 10){
    console.log('count valor: ', count);
    count++;
}
//Obs: Imprementar um incrementador para não ficar em um loop infinito


//EXEMPLO USANDO WHILE

//Função gera um numero aleatorio dentro de um intervalo passado
// function randomInFromInterval(min, max){
//     return Math.floor(Math.random()*(max - min + 1)+ min)
// }

// const target = randomInFromInterval(1, 50)
// let guess = parseInt(prompt('digite um numero entre 1 e 50'))


//Usando while
// while(guess !== target){
//     console.log('Esse não é o numero correto, tente novamente');
//     guess = parseInt(prompt('digite um numero entre 1 e 50'))
// }

// Usando Do while
// do{
//     console.log('Esse não é o numero correto, tente novamente');
//     guess = parseInt(prompt('digite um numero entre 1 e 50'))
// }while(guess !== target)

// console.log('Você acertou');

//DO - WHILE
//Unica diferença pro while é que o do-while é executado ao menos uma vez

//FOR
for(let i = 0; i < 10; i++){
    console.log('contando valor: ', i);
}

//FOR IN 
//percorre todos os index de um array

const vetor = [10,20,30,40,50]

for(index in vetor){
    console.log(index, vetor[index]);
}

//FOR OF
//percorre todos os valores de um array
for(value of vetor){
    console.log(value);  //mostra o valor dessa rodada
}
//OBS: Evite adicionar ou remover itens durante o laço, isso pode causar comportamentos imprevissiveis

