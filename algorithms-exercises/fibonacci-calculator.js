//A fórmula de Binet é uma forma de calcular números de Fibonacci.

//Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando a fórmula acima.

//Entrada
//A entrada é um número natural n (0 < n ≤ 50).

//Saída
//A saída é o valor de Fibonacci(n) com 1 casa decimal utilizando a fórmula de Binet dada.

let N = parseInt(gets());
let raizDeCinco = (Math.sqrt(5))
let primeiroBloco = (1 + raizDeCinco)  / 2
let segundoBloco = (1 - raizDeCinco) / 2
let expressaoPositiva =  Math.pow( primeiroBloco, N )
let expressaoNegativa =  Math.pow(  segundoBloco, N )

let fib = ((expressaoPositiva - expressaoNegativa) /  raizDeCinco    )         ;


print(fib.toFixed(  1 ));