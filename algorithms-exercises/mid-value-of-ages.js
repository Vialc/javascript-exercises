//Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. 
//O último dado, que não entrará nos cálculos, contém o valor de idade negativa. 
//Calcular e imprimir a idade média deste grupo de indivíduos.

//Entrada
//A entrada contém um número indeterminado de inteiros. 
//A entrada será encerrada quando um valor negativo for lido.

//Saída
//A saída contém um valor correspondente à média de idade dos indivíduos.

//A média deve ser impressa com dois dígitos após o ponto decimal.

let cont = 0;
let n = 0;
let soma = 0;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

do {
n = parseInt(gets())
if (n > 0){
  soma = soma + n

cont++
} 

}while (n > 0);
let media = soma / cont 

print(media.toFixed(2));