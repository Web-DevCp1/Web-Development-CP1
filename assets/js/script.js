//1 - Como declarar uma variável com valor undefined, vazio e com valor em JavaScript? Exemplifique e
//demonstre a saída do valor da variável! 

let varialvelUndefined; // variável declarada mas não inicializada, portanto seu valor é undefined
console.log(varialvelUndefined); // saída: undefined

let variavelVazia = "";
console.log(variavelVazia); // variavel criada, mas setada com valor null

let variavelComValor = "Olá, Mundo!";
console.log(variavelComValor); // saída: Olá, Mundo!

// 2 - Como usar o operador os operadores( != , ==, >= ) em JavaScript? Exemplifique e demonstre a saída!
console.log("os operadores lógicos retornam sempre true ou false, servem para comparar valores");
console.log("exemplos:");
console.log("5 >= 3 : "+ (5 >= 3)); // 5 é maior ou igual a 3? saída: true
console.log("5 == 5 : "+ (5 == 5)); // 5 é igual a 5? saída: true
console.log("5 != 3 : "+ (5 != 3)); // 5 é igual a 3? saída: true

/*3 - Escreva um programa(usando Switch case) que calcula o índice de massa corporal (IMC) de uma pessoa
e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as
seguintes faixas de IMC: abaixo de 18,5 (abaixo do peso), entre 18,5 e 24,9 (peso ideal) e acima de 24,9
(acima do peso). Exemplifique e demonstre a saída! (10 Pontos)
*/

let peso = 70; // peso em kg
let altura = 1.75; // altura em metros
let calcImc = (peso / (altura * altura)); // cálculo do IMC
let categoria = "";

// usando switch case para determinar a categoria do IMC
switch (true) {
  case (calcImc < 18.5):
    categoria = "Abaixo do peso";
    break;

  case (calcImc <= 24.9):
    categoria = "Peso ideal";
    break;

  case (calcImc > 24.9):
    categoria = "Acima do peso";
    break;

  default:
    categoria = "Valor de IMC inválido";
    break;
}

console.log("seu imc é: " + calcImc + ", categoria: " + categoria);

//4 - Faça um programa que que faça uma repetição até 50 (usando for )apresentando  a mensagem no 
//console, o valor é: ! 

for (let i=0; i<=50; i++) {
    console.log("O valor é: " + i);
}

//5 - Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos 
//dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e 
//senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou 
//se houve falha de autenticação. Exemplifique e demonstre a saída! 

let nome = "admin";
let senha = "1234";

if (nome == "admin" && senha == "1234") {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Falha na autenticação.");
}

//6 - Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno 
//foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6. Exemplifique e demonstre 
//a saída!

let n1 = 7.5;
let n2 = 6.0;
let n3 = 8.0;
let n4 = 5.5;
let n5 = 9.0;
let n6 = 4.5;
let n7 = 6.5;
let media = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;

if (media>=6) {
    console.log("Aluno Aprovado")
} else {
    console.log("Aluno Reprovado")
}

//7 - Crie um programa que declare a varíavel como String depois converta para float e em seguida apresente o tipo da varíavel.

let numString1= "5.5" //string
console.log(parseFloat(numString1)) //conversão para float
console.log (typeof parseFloat(numString1)) //mostra a variável como número

//8 - CONVERTA de float para int usando parseInt OS SEGUINTES NÚMEROS:
//30.345

let numFloat1= 30.345
console.log(parseInt(numFloat1))

//154.666

let numFloat2= 154.666
console.log(parseInt(numFloat2))

//50.888

let numFloat3= 50.888
console.log(parseInt(numFloat3))

//89.52

let numFloat4= 89.52
console.log(parseInt(89.52))

//9 - CONVERTA de String para float usando parseFloat OS SEGUINTES NÚMEROS
//30.345

let numString2= "30.345"
console.log(parseFloat(numString2))

//154.666

let numString3= "154.666"
console.log(parseFloat(numString3))

//50.888

let numString4= "50.888"
console.log(parseFloat(numString4))

//089.52

let numString5= "089.52"
console.log(parseFloat(numString5))