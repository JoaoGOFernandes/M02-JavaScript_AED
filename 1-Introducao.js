//Type System

//O Js é uma linguagem de tipagem dinâmica e fraca
/*
vertente -> Estática ou Dinamica
    Estática: Obriga declarar o tipo ao criar a variavel
    Dinamica: utiliza o valor colocado na variável para determinar que tipo usar
*/

/*
Permissão de troca de tipo -> Forte ou Fraca
    Forte: Não permite a troca de tipos de uma variavel
    Fraca: permite a troca de tipos para uma variavel
*/ 


//Tipos de variaveis em js

//PRIMITIVOS
//undefined  - não há tipo nem valor
var a;
var b = undefined;

//boolean    - verdadeiro ou falso
var c = true;
var d = false;

//string     - textos
var e = "teste";

//number     - números
var f = 12;

//COMPLEXOS
//functions   - funções
var g = function(){};
var h = () => {};

//object      - objetos
var i = {};
var j =[];
var k = null;

//Pode-se checar usando typeof e imprimindo com console.log()