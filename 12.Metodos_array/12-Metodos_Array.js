//MAP
//Itera por todo array, retorna uma array novo modificado de acordo com afunção passada

const numbers = [1,2,3]

const doubleNumbers = numbers.map(item => item * 2)
//A função pode receber: item, index, array
//A função sera executada para cada item do array e sempre deve retornar um valor

console.log(numbers);   //Permanece intacto
console.log(doubleNumbers);

//OBS: Diferente de um forEach q nunca retorna um valor, no map você tem sempre q retornar o valor

const products = [
    {name: 'Mouse Sem Fio', price: 30},
    {name: 'Pen Drive', price: 25},
    {name: 'Cartucho de Tinta', price: 50},
    {name: 'SUporte Ergonômico para Notebook', price: 23},
    {name: 'Repetidor de Sinal Wi-Fi', price: 44}
]

const saleProducts = products.map(product => {
    if(product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    }
    return product
})
console.log(products);
console.log(saleProducts)
//OBS: Não estamos trabalhando com copia(product) se trata do valor em si, qualquer modificação nele afeta o array original
//EX: product.price = product.price/2     - vai alterar o array original


//FILTER
//Baseado numa condição gera um novo array com os elementos selecionados de acordo com a função passada

const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)
//A função pode receber: item, index, array
//A função sera executada para cada item do array e sempre deve retorna um boolean


console.log(numbersGreaterThan37);

const users =[
    {name: 'Ada Lovelace', premium: true },
    {name: 'Grace Hopper', premium: false },
    {name: 'Alan Turing', premium: true },
    {name: 'Linus Torvalds', premium: false },
    {name: 'Margeret Hamilton', premium: true },
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)


//REDUCE
//Baseado no array original reduz o array a algum outro tipo de dado

const number =[1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)
//A função pode receber: acumulador, item, index, array
//Como parametro temos a função e um segundo parametro que sera o valor inicial atribuido ao acumulador

console.log(sumResult)

const phaseScores = [
    { name: 'Vinivius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 },
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if(phaseScore.name === 'Roger Melo'){
        accumulator += phaseScore.score
    }
    return accumulator
}, 0)

console.log(rogerScore);