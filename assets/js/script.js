//1 - Como declarar uma variável com valor undefined, vazio e com valor em JavaScript? Exemplifique e
//demonstre a saída do valor da variável! (5 Pontos)

let varialvelUndefined; // variável declarada mas não inicializada, portanto seu valor é undefined
console.log(varialvelUndefined); // saída: undefined

let variavelVazia = "";
console.log(variavelVazia); // variavel criada, mas setada com valor null

let variavelComValor = "Olá, Mundo!";
console.log(variavelComValor); // saída: Olá, Mundo!

//4 - Faça um programa que que faça uma repetição até 50 (usando for )apresentando  a mensagem no 
//console, o valor é: !

for (let i=0; i<=50; i++) {
    console.log("O valor é: " + i);
}

//Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos 
//dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e 
//senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou 
//se houve falha de autenticação. Exemplifique e demonstre a saída! 

