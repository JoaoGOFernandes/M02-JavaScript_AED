//MATRIZES

const tabela = [
    [1, 2,  3,   4],
    [5, 6,  7,   8],
    [9, 10, 11, 12],
];

//Acessando uma linha da matriz
console.log(tabela[0]);     //[1, 2, 3, 4]

//Acessando um elemento da matriz
console.log(tabela[1][2]);  //7

console.log(tabela.length)  //3 linhas

//Imprimindo os elementos do vetor com um loop
for (let i = 0; i < tabela.length; i++) {
    console.log(tabela[i][0]);
    console.log(tabela[i][1]);
    console.log(tabela[i][2]);
    console.log(tabela[i][3]);
}

//Imprimindo os elementos do vetor com dois loops
for (let i = 0; i < tabela.length; i++) {
    for (let j = 0; j < tabela[i].length; j++) {
        console.log(tabela[i][j]); 
    }
}

//OBS: Como a matriz é formada por um array de vetores, podem ter linhas de tamanhos diferentes

//Exemplo a ser usado quando um determinado elemento não tem valor
const table = [
    [1, null, null,  4],
    [5,   6,   7, null],
    [null, 10, 11,  12],
];
//OBS: Sempre manter a semantica das colunas, nunca omitir elemento pois quebra essa logica

console.log(table);

const exemplo = [[],[]];

//Criando uma matriz 2x2
exemplo[0][0] = 10;
exemplo[0][1] = 20;

exemplo[1][0] = 30;
exemplo[1][1] = 40;

console.log(exemplo.join('\n'));

//Modificando a matriz 2x2 para 2x3
exemplo[0][2] = 25;
exemplo[1][2] = 45;

console.log(exemplo.join('\n'));

