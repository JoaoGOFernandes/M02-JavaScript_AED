//FUNÇÃO

//Function declaration
function sayHi() {
    console.log('oi');
}
//OBS: sofre hoisting

//Function expression
const showFood = function () {
    console.log('pizza');
}
//OBS: Usa uma função anonima que é armazenada em uma variavel

//Arrow function
const double1 = (number) => {
    return number * 2
}

const double2 = number => number * 2
//OBS1: pode vir sem o parentese se for só um parametro
//OBS2: quando sem o parentese, não é aceito valor default
//OBS3: pode se remover o return se tirar as chaves quando há só uma linha

//Invocação/chamada da função
sayHi()  
showFood()

//Argumentos, parametros e default parameters
const myFunc = function(name = 'Fulano', lastname = 'de Tal'){
    console.log(`Oi, ${name} ${lastname}`);
}

myFunc()                      //Como não recebe argumento, usará o default
myFunc('João', 'Gabriel')     //Argumento será passado para os parametros da função

//Função de Alta Ordem (recebem como parametro ou retornam funções)
const soma = (a, b) => a + b
const subtrair = (a, b) => a - b 
const multiplicar = (a, b) => a * b
const dividir = (a, b) => b > 0 ? a/b : NaN

const calcular = (operacao, a, b) => operacao(a, b)   //Calcular recebe uma função como parametro

const somar4e2 = calcular(soma, 4, 2)
console.log(somar4e2);

//CallBack(Funções q chamam outras)
const myFavoriteNumber = callback => {    //Executa uma função, que deve ser passada na hora da execução
    const value = 7
    callback(value)
}

const logCallback = number => {        //Função que imprime um valor
    console.log(number);
}

const prompCallback = number => {
    prompt(number)
}

myFavoriteNumber(logCallback)          //Vai imprimir o numero favorito no console
// myFavoriteNumber(prompCallback)     //Vai imprimir o numero favorito no prompt

//Foreach
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

//O ForEach utiliza uma função de callback como argumento
//EX: socialNetworks.forEach(()=>())   

socialNetworks.forEach((socialNetwork)=>{       //Para cada elemento do array é executado uma ação, no caso imprimir cada um
    console.log(socialNetwork);
})
//OBS1: tem como argumento o elemento, o index, e o array
//EX: socialNetworks.forEach((item, index, array)=>{
//         console.log(`O elemento "${item}" do vetor [${array.join(', ')}] esta na posição ${index}`)
//    })

//OBS2: pode dessaciar a função de callback para melhor legibilidade
//EX: const logArrayInfo = (socialNetwork, index, array) => {
//           console.log(index, socialNetwork, array)    
//}
//socialNetworks.forEach(logArrayInfo)         