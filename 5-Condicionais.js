//Estruturas Condicionais

//IF

let estaSol = true;

if(estaSol){                                //Forma de declaração padrao
    console.log("Fui para a praia");
}

if(estaSol) console.log("Piscininha amor"); //Omissão das chaves, por ter só um comando


//ELSE

let final_de_semana = true;

if(final_de_semana){                                  //Forma de declaração padrao
    console.log("Sextou bebê");
}else{
    console.log("Bora trabaia");
}

if(final_de_semana) console.log("Tô na gandaia");
else console.log("Fui trabaia");


//ELSE IF

let preco = 120;

if (preco > 100) {
    console.log("Não tenho dinheiro, bora pedir na net");
}else if(preco > 80) {
    console.log("De qualidade papai");
}else {
    console.log("Bora procurar em outro lugar");
}

//Operador Ternario

const ondeVou = estaSol ? 'praia' : 'netflix';
console.log(ondeVou);

//SWITcH

const sinal = 'verde';

switch (sinal) {
    case 'verde':
        console.log('pode passar');
        break;
    case 'amarelo':
        console.log('preste atencao');
        break;
    case 'vermelho':
        console.log('fechado, aguarde abrir');  
        break
}

const havaiano = "desenrola"

switch(havaiano){
    case 'desenrola':                   //Mesma resposta pra casos diferentes
    case 'bate':
        console.log("Havainos tão lançando a braba pros menorzinho");
        break;
    default:                            //Quando nao tiver nenhum casos que encaixa
        console.log("joga de ladin");
        break
}

//OPERADORES

//Logicos

//igual         ==
//diferente     !=
//menor         <
//menor igual   <=
//maior         >
//maior igual   >=

//Booleanos

//ou      ||
//e       &&
//negação  !

//Comparação de tipo
//igual e do mesmo tipo          ===
//diferente ou de outro tipo     !==

const comp_tipo1 = '10' == 10;   //Tem valores iguais? SIM
const comp_tipo2 = '10' === 10;  //Tem valores iguais e são do mesmo tipo? NÃO, tipo diferente
const comp_tipo8 = 10 === 10;    //Tem valores iguais e são do mesmo tipo? SIM
const comp_tipo3 = '10' != 10;   //Tem valores diferentes? NÃO
const comp_tipo4 = '10' !== 10;  //Tem valores diferentes ou sao de tipos diferentes? SIM, tipos diferentes
const comp_tipo5 = '11' !== 10;  //Tem valores diferentes ou sao de tipos diferentes? SIM, valor e tipo
const comp_tipo6 = 11 !== 12;    //Tem valores diferentes ou sao de tipos diferentes? SIM, valor
const comp_tipo7 = 11 !== 11;    //Tem valores diferentes ou sao de tipos diferentes? Nao

console.log("'10' == 10", comp_tipo1);     //true
console.log("'10' === 10", comp_tipo2);    //false
console.log("10 === 10", comp_tipo8);    //true
console.log("'10' !== 10", comp_tipo3);    //false
console.log("'10' !== 10", comp_tipo4);    //true
console.log("'11' !== 10", comp_tipo5);    //true
console.log("11 !== 12", comp_tipo6);    //true
console.log("11 !== 11", comp_tipo7);    //false


//Truthy e Falsy

//Falsy
//zero, zero em bigint(BigInt(0), equivale a 0n), null, undefine, false, NAN, ""
0 ? console.log("truthy") : console.log("falsy")           //falsy
0n ? console.log("truthy") : console.log("falsy")          //falsy
null ? console.log("truthy") : console.log("falsy")        //falsy
undefined ? console.log("truthy") : console.log("falsy")   //falsy
false ? console.log("truthy") : console.log("falsy")       //falsy
NaN ? console.log("truthy") : console.log("falsy")         //falsy
"" ? console.log("truthy") : console.log("falsy")          //falsy


//Truthy
//São muitos casos, levar em consideração, mas focar nos falsy