//UM POUCO MAIS DE ARRAYS E MATRIZES

//DICA 1: Só misture tipos em arrays se realmente for necessário(objeto é o ideal)
//DICA 2: Tente não alterar os dados de um array: mantenha o original e faça uma copia
//DICA 3: Arrays de objetos tendem a ser mais interessantes como estratégia do que matrizes
//DICA 4: Não modifique o array dentro de um laço que esta percorrendo esse mesmo array
//DICA 5: Arrays são objetos e como tal são passados por referencia

//Exemplo 
const arrA = [1, 2, 'x', 4];
let arrB = arrA;

arrB[2] = 3;

console.log(arrA);     //[1, 2, 3, 4]
console.log(arrB);     //[1, 2, 3, 4]
//modificar um é modificar o outro, pois ambos apontam para a mesma memoria

//Para copiar um array precisamos copiar elemento a elemento


//SPREAD OPERATOR
const vetorA = [1, 2, 3, 4, 5];
const vetorB = [...vetorA];      //usando o operador spread ...

vetorB[3] = 'x';                //Como é array é um tipo por referencia, temos o ponteiro e podemos alterar o valor 

console.log(vetorA);     //[1, 2, 3, 4, 5]
console.log(vetorB);     //[1, 2, 3, x, 5]

const vetorC = [...vetorA, 6, 7, 8, 9, 10];
console.log(vetorC);


//Desestruturando o array para um conjunto de variaveis
const arrayA = [1, 2, 3];
const [a, b, c] = [1, 2, 3];

console.log(a, b, c);

const [primeiro, ...resto] = vetorA;

console.log(primeiro);
console.log(resto);


const [first, second, third, ...remainder] = vetorA;
console.log(first);
console.log(second);
console.log(third);
console.log(remainder);


