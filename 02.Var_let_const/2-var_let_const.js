//PROBLEMA DO VAR

//1.Sobre HOSTING
console.log("Imprimindo x", x); //x não deveria existir
var x = 10;

/*O que acontece: 
var x;                          //Fica undefined, mas passa a existir
console.log("Imprimindo x", x);
x = 10;
*/

//2.Não respeita escopo
for(var i=0; i < 10; i++){
    console.log("Print ", i);
}

console.log(i); //Não deveria estar visivel fora do loop
//Isso acontece em escopos de blocos(condicionais e loops) 


//Formas de declarar variavel

//CONST - Não pode redefinir, reatribuir um valor após declarado
const pi = 3.14;

//LET - Muito parecido com o var, mas tem escopo de bloco
var a1 = 12;
let a2 = 11;

console.log(window.a1); //vai mostrar, esta global
console.log(window.a2); //undefind, não esta no escopo chamado 