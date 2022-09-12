//Vetores

//SINTAXE
//let nome_array = [];
const array =[1, 2, "🐔", "🥚", "banana", null];     //Pode ser um emoji com elementos de diferentes tipos

console.log(array);        //Vetor inteiro
console.log(array[3]);     //Elementos do vetor

//obs: indexação começa em zero, para um vetor de n elemetos, teremos os indices de 0 a n-1
//array[0], array[1], array[2], array[3], array[4]

//TAMANHO DE UM VETOR
console.log(array.length);  // 6 elementos


//INSERÇÃO DE VALORES AO ARRAY
const arr = [10];

arr.push(11);    //vai no final, pra posição arr[1]
arr.unshift(9);  //vai pro começo pra posição arr[0]
console.log(arr);

//BUSCANDO VALORES NO ARRAY
const vetor = [10, 11, 12, 12, 12, 13];
const firstIndex = vetor.indexOf(12);      //retorna a primeira ocorrencia do 12 = vetor[2]
const lastIndex = vetor.lastIndexOf(12);   //retorna a ultima ocorrencia do 12 = vetor[4]

console.log(firstIndex, lastIndex);
//Obs: se não tiver o que esta procurando no vetor, é retornado -1

console.log(vetor.indexOf(14));    //-1, não tem
console.log(vetor.includes(14));   //vê se existe o que esta sendo procurado e retorna em booleano

//REMOÇÃO DE VALORES EM UM ARRAY
const vetor1 = [1,2,3,4,5];

const lastValue = vetor1.pop();  //POP retorna a ultima variavel e retira do vetor 
console.log(vetor1);             //[1,2,3,4]
console.log(lastValue);          //5

const firstValue = vetor1.shift()  //Remove o primeiro item do array e o retorna
console.log(vetor1);               //[2,3,4]
console.log(firstValue);           //[1]


//PREENCHENDO UM ARRAY
const array1 = new Array(10);   
//Como array é um objeto ele possui construtor que permite passar o tamanho do array que sera gerado
array1.fill(7);                    
console.log(array1);              //[7, 7, 7, 7, 7, 7, 7, 7, 7, 7]


//CONCATENANDO UM ARRAY
const vetorPart1 = [1, 2, 3, 4];
const vetorPart2 = [5, 6, 7, 8];
const vetorPart3 = [9, 10];
const vetorInteiro = vetorPart1.concat(vetorPart2).concat(vetorPart3);
console.log(vetorInteiro);


//REVERTENDO ARRAYS
const reverseVetor = [5, 4, 3, 2, 1];
reverseVetor.reverse();
console.log(reverseVetor);
//altera o array original, modificando a ordem


//ORDENAÇÃO
const arr1 = [3, 4, 7, 2, 1, 5, 6];
arr1.sort();
console.log(arr1);

const arr2 = ["keydma", "carlos", "joao", "peterson"];
arr2.sort();
console.log(arr2);
//obs1: Para ordenações mais complexa, diferentes de alfabetica e numerica, criar função propria
//obs2: Tomar cuidado com diferenciação de maiuscula e minusca na hora da ordenação


//SPLICE
//permite adicionar e remover, é como se fosse uma tessoura, dependendo da quantidade de parametros passados

//SPLICE COM 1 PARAMETRO
const vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res2 = vetor2.splice(3);
console.log(vetor2);     //[4, 5, 6, 7, 8, 9, 10]
console.log(res2);        //[1, 2, 3]
//corta o vetor a partir do index 3, retornando os elemetos não selecioandos antes do index 3

//SPLICE COM 2 PARAMETRO
const vetor3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res3 = vetor3.splice(3,2);
console.log(vetor3);      //[1, 2, 3, 6, 7, 8, 9, 10]
console.log(res3);        //[4, 5]
//corta o vetor a partir do index 3, excluindo dois elementos(vetor[3], vetor[4]), que são retornado 

//SPLICE COM N PARAMETRO
const vetor4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res4 = vetor4.splice(3, 2, 11, 12, 13);
console.log(vetor4);      //[1, 2, 3, 11, 12, 13, 6, 7, 8, 9, 10]
console.log(res4);        //[4, 5]
//corta o vetor a partir do index 3, excluindo dois elementos(vetor[3], vetor[4]), que são retornado, e os parametros seguintes são adicionados no local do corte


//Como array é um objeto ele está sujeito a manipulação interna ainda que seja const, mas nao a reatribuição quando for const
//const arr = [10];
//arr = [10, 20];    // erro

const arr3 = [10];
arr.push(20);        // [10, 20]