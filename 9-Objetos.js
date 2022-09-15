//OBJETOS

//Criando uma agenda pra exemplificar o beneficio de um objeto

//Agenda com vetor
const nomes = ["Alberto Solon","Joao Gabriel", "Renato Garcia"];
const telefones = ["00000000", "11111111", "22222222"]

for(let i = 0; i < nomes.length; i++){       //Vinculando o nome e o telefone pelo index do vetor
    console.log(nomes[i], telefones[i]);
}
//Sucetivel a varios erros

//Agenda com matriz
const agenda1 = [
    ["Alberto Solon","00000000"],
    ["Joao Gabriel", "11111111"],
    ["Renato Garcia", "22222222"]
]

for(contato of agenda1){                   //Discrimina os vetores da matriz e itera por cada um
    console.log(contato[0], contato[1]);
}
//Ainda temos que saber as posições dos dados e o que eles representam

//Agenda com objetos
const agenda2 = [
    {nome: "Alberto Solon", telefone: "00000000"},
    {nome: "Joao Gabriel", telefone: "11111111"},
    {nome: "Renato Garcia", telefone: "22222222"}
];

for(contato of agenda2){
    console.log(contato.nome, contato.telefone);
}

//Quando um atributo nao existir retornará undifined
const agenda3 = [
    {nome: "Alberto Solon", telefone: "00000000", email: "alberto_s@teste.com"},
    {nome: "Joao Gabriel", telefone: "11111111"},
    {nome: "Renato Garcia", telefone: "22222222"}
];

for(contato of agenda3){
    console.log(contato.nome, contato.telefone, contato.email);
}

//Usando uma função para criar contato
const createContato1 = (nome, telefone, email) =>({
    nome: nome,
    telefone: telefone,
    email: email || ""      //equivalente ao contato.email ? contato.email : ""
});

console.log(createContato1("Gabriel Ragalzi", "44444444", "gabriel_r@teste.com"));

//Quando o atributo recebe o mesmo nome da variavel de entrada podemos simplificar
//Em vez de {nome: nome}
//Teremos {nome}
const nome = "Tadeu";
const aluno1 = {nome: nome};
console.log(aluno1);

const  aluno2 = {nome};
console.log(aluno2);

//Simplificando a função de criar contato
const createContato2 = (nome, telefone, email) => ({nome, telefone, email: email || ""})

console.log(createContato2("Ed Gama", "55555555", "ed_gama@teste.com"));

const joao = {                         //Objeto criado com informações especificas
    firstName: "João",
    lastName: "Gabriel",
    birthYear: 1998,
    job: "Estudante",
    friends: ["Leozin", "Dinho", "Carol"],
    calcAge: function() {              //Qualquer função agregada a um objeto é chamado de metodo
        return 2022 - this.birthYear;  //Pega o atributo da proprio objeto
    }
};


console.log(joao);


//Entender pq tá dando erro com o objeto


//Reatibuição de atributo
joao['job'] = 'Estagiando';     //notação de colchete

joao.location = "Ribeiriao - Brasil" //notação de ponto
console.log(joao['job']);       //notação de colchete
//
//console.log(joao);
//console.log(joao['firstName']);

