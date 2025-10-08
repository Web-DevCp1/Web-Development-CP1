# 🧠 Conceitos Fundamentais de JavaScript

Este documento reúne exercícios resolvidos em contexto acadêmico avaliativo.
---
Em JavaScript, uma variável pode ser declarada de diferentes formas. Quando uma variável é **declarada, mas não inicializada**, seu valor é `undefined`. Se ela for criada com uma **string vazia**, significa que tem valor definido, mas sem conteúdo. Já uma **variável com valor atribuído** recebe algo no momento da declaração, como `"Olá, Mundo!"`.

Os operadores `!=`, `==` e `>=` são usados para comparar valores e retornam sempre um resultado **booleano** (`true` ou `false`).  
- `==` verifica se dois valores são iguais.  
- `!=` verifica se são diferentes.  
- `>=` verifica se o primeiro é maior ou igual ao segundo.  
Esses operadores são fundamentais para a lógica de decisão em um programa.

O **`switch case`** é uma estrutura condicional que permite testar várias condições de forma organizada. Um exemplo prático é o cálculo do **Índice de Massa Corporal (IMC)**, onde o programa avalia faixas de valores e determina se a pessoa está abaixo, dentro ou acima do peso ideal. A lógica é: calcular o IMC com `peso / (altura * altura)` e usar `switch (true)` para identificar a categoria correta.

O comando **`for`** executa um bloco de código repetidas vezes, enquanto uma condição for verdadeira. Ele é usado, por exemplo, para exibir números de 0 a 50 ou percorrer listas.  
Sua estrutura básica é:  
`for (inicialização; condição; incremento) { ... }`

O **`if...else`** é usado para tomar decisões. Ele verifica se uma condição é verdadeira e executa um bloco de código conforme o resultado. Um exemplo é a **verificação de login**, onde o sistema confere se o nome de usuário e a senha correspondem aos dados esperados — exibindo uma mensagem de sucesso ou de falha na autenticação.

O cálculo de **médias** também utiliza esse tipo de estrutura. Ao somar várias notas e dividir pelo número total, o programa pode verificar se a média atinge o valor mínimo para aprovação.  
Por exemplo:  
`if (media >= 6) { aprovado } else { reprovado }`

Outro conceito importante é a **conversão de tipos**. JavaScript permite transformar valores de um tipo para outro:  
- `parseFloat()` converte uma string para número decimal. Exemplo: `"5.5"` → `5.5`  
- `parseInt()` converte uma string ou número decimal para inteiro. Exemplo: `"30.45"` → `30`  
Essas funções são úteis quando o programa recebe dados de entrada como texto, mas precisa tratá-los como números.

Esses fundamentos — **variáveis, operadores, estruturas condicionais, laços e conversões** — são o alicerce do raciocínio lógico em programação. Entendê-los é essencial para compreender **como o código “pensa”, toma decisões e repete ações**. A partir deles, é possível evoluir para estruturas mais complexas e desenvolver programas realmente funcionais.

---

### 💻 Autoria

| Nome completo                   | Função           |
|----------------------------------|------------------|
| **Felipe Silva Santos Menezes**  | Desenvolvedor    |
| **Vinicius Kozonoe Guaglini**    | Desenvolvedor    |
| **César André Zanin Filho**      | Desenvolvedor    |
