/* 
    Functions / Funções

    function padrão -> function() {}
    arrow function -> () => {}

    Não escrevemos "function",
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Function".

*/

function sayMyName(name){
    return `Seu nome é ${name}`
}

const sayMyName2 = name => `Seu nome é ${name}`

console.log(sayMyName("Rodolfo"))
console.log(sayMyName2("Nick"))

function sum2(number1, number2){
    return number1 + number2
}

const sum = (number1, number2) => number1 + number2

console.log(sum2(2, 2))
console.log(sum(2, 3))