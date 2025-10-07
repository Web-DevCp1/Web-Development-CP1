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
let imc = peso / (altura * altura); // cálculo do IMC

switch (imc) {
    case imc < 18.5:
        categoria = "Abaixo do peso";
        break;
    case imc >= 18.5 && imc <= 24.9:
        categoria = "Peso ideal";
        break;
    case imc > 24.9:
        categoria = "Acima do peso";
        break;
 
    default:
        console.log("Valor de IMC inválido");
        break;
}
console.log("peso: "+peso+"kg, altura: "+altura+"m, IMC: "+ imc.toFixed(2) + " categoria de IMC: " + categoria); // saída do IMC com duas casas decimais
//4 - Faça um programa que que faça uma repetição até 50 (usando for )apresentando  a mensagem no 
//console, o valor é: !

for (let i=0; i<=50; i++) {
    console.log("O valor é: " + i);
}

//Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos 
//dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e 
//senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou 
//se houve falha de autenticação. Exemplifique e demonstre a saída! 

