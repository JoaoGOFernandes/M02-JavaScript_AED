//Entrada de Dados - Sempre textuais

//const num1 = prompt("Entre com o 1º numero: ")
//const num2 = prompt("Entre com o 2º numero: ")
//console.log(typeof num1, typeof num2);          //String

//const media = (num1 + num2 )/ 2.0;    //vai ocorrer uma concatenação dos numeros
//console.log("A media é: ", media);    //Não dá a media esperada

/*
As string usam o "+" como um operador de concatenação e as entradas são
entendidas como string, portando deve-se tomar cuidado para converter
numero de entra antes de usa-los
*/
const ola = "hello" + " " + "World"; //concatenação
console.log(ola);
console.log(ola + ' eu sou o joão'); //concatenando no print


const num_conc1 = '1' + 2 - 3 + '10' + '5' - 2 + 3;;  //9106
//Equivale  (1s c 2n = 12s) - 3n = 9n) c 10s = 910s) c 5n = 9105s) - 2n = 9103n) + 3n = 9106n)
//Quando tempos um numero em string o operador de adição vira concatenação
console.log(num_conc1);
console.log(typeof num_conc1); //Acabou sendo number no final

const num_conc2 = '1' + 2 - 3 + '10' + 4; //9104
console.log(num_conc2);
console.log(typeof num_conc2); //string

const num_conc3 = '1' + 2 - 3; //9
console.log(num_conc3);
console.log(typeof num_conc3); //number

//Convertendo uma string em um numero

const num10s = '10';
const num12_5s = '12.5';
console.log('num10s: ' + typeof num10s);     //String
console.log('num12_5s: ' + typeof num12_5s); //String

const num10n = parseInt(num10s);
const num12_5n = parseFloat(num12_5s)
console.log('num10n: ' + typeof num10n);     //number
console.log('num12_5n: ' + typeof num12_5n); //number

//Arrumando o exemplo inicial 

const num1 = parseFloat(prompt("Informe o 1º numero: "))
const num2 = parseFloat(prompt("Informe o 2º numero: "))

const media = (num1 + num2)/ 2.0;
console.log('A media éh: ', media);