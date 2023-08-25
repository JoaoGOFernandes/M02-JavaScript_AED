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

//SORT
//Ordena  strings, numeros e objetos de um array, modificando o array original
const names = ['Christian', 'Alfredo', 'Edson']
names.sort()

console.log('names')
//Ordenou em ordem alfabetica os nomes

const scores = [10, 50, 20, 5, 35, 70, 45]
scores.sort()
//OBS: o sort ordena numeros baseados somente no primeiro algarismo, para resolver isso
scores.sort((score1, score2)=> score2 - score1 )

//OBS: Para numeros deve ser passado a função de parametro para correta ordenação


console.log(scores)

const theBigFamily = [
    { name: "Lineu", score: 20 },
    { name: "Nenê", score: 10},
    { name: "Tuco", score: 50},
    { name: "Bebel", score: 30},
    { name: "Agostinho", score: 70}
]

// theBigFamily.sort((item1, item2) => {
//     if(item1.score > item2.score){
//         return -1
//     }else if(item2.score > item1.score){
//         return 1
//     }

//     return 0
// })

// console.log(theBigFamily);
//OBS: o sort pode receber um argumento opcional que é uma função de conparação
//OBS: a função de comparação entre dois itens deve retornar um numero >0, <0 ou =0
//item1 > item 2, então < 0
//item1 < item 2, então > 0
//item1 = item 2, então = 0

theBigFamily.sort((item1, item2) => item2.score - item1.score)
//Se >0 item 2 antes do item1
//Se <0 item 1 antes do item2
//Se =0 itens nao sao ordenados

console.log(theBigFamily)

//CONCATENAÇÃO DE METODOS

const books =[
    {name: 'Código Limpo', price: 30},
    {name: 'O milagre da manhã', price: 5},
    {name: 'Alice no País das Maravilhas', price: 10},
    {name: 'Quem Pensa Enriquece', price: 50},
    {name: 'O livro da ciência', price: 40}
]

// const filteredBooks = books.filter(book => book.price > 20)
// const booksOnSale = filteredBooks.map(book => `O preço do livro "${books.name}" caiu para ${books.price} reais`)

const booksOnSale = books
    .filter(({price}) => price > 20)
    .map(({name, price}) =>
     `O preço do livro "${name}" caiu para ${price} reais`)
debugger