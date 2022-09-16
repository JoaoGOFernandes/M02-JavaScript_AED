//ARITMETICA

//cuidados:
//1.Estar trabalhando com numeros e não string, como visto em coerção de tipo
//2.Diferenciar ponto flutuante de inteiro(ACHO q o js faz automatico)
//3.Uso de ponto(.) como separador decimal, normalizar a virgula(,) no input

//Operadores

//soma           +
//subtração      -
//multiplicação  *
//divisao        /
//resto          %

//classe Math

//valor absoluto(sem sinal)  Math.abs(num);
console.log(Math.abs(-12));

//Arredondamento
console.log(Math.ceil(10.65));   //11 - retorna o maior inteiro
console.log(Math.floor(10.65));  //10 - retorna o menor inteiro
console.log(Math.round(10.65));  //11 - inteiro mais proximo

//Valores Maximos e Minimos
console.log(Math.max(7,8,9,10,11,12));  //12
console.log(Math.min(7,8,9,10,11,12));  //7

//Pontencia e raiz
console.log(3 ** 2);  //9
console.log(Math.sqrt(16));  //16

//Geração de números pseudo-aleatórios
console.log(Math.random());  //Retorna entre 0 e 1

//Exemplo:
const senha_aleatoria = (Math.random()*1000000).toFixed();
console.log(senha_aleatoria);

//Funções trigonometricas
console.log(Math.PI);              //3.1415...
console.log(Math.sin(Math.PI/6));  //sin(30)=0.5
console.log(Math.cos(Math.PI/6));  //cos(30)=0.86
console.log(Math.tan(Math.PI/6));  //tan(30)=0.57
