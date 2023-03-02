
// 1) Observe o trecho de código abaixo:
// Ao final do processamento, qual será o valor da variável SOMA?
let INDICE = 13;
let SOMA = 0;
let K = 0;

while(K < INDICE){
        K = K + 1;
        SOMA = SOMA + K;
    }

console.log(`Resultado final da SOMA: ${SOMA}`);

//resultado final é 91


//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
//se o número informado pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
const checkThisNumber = 1592;
const fibonacci  = [0, 1];

for (i = 2; ; i++){
    temp = fibonacci[i-1] + fibonacci[i-2];
    fibonacci.push(temp);
    if (temp == checkThisNumber)
    {
        console.log(`O número ${checkThisNumber} pertence a sequência de Fibonacci`);
        break;
    } else if (temp > checkThisNumber){
    
        console.log(`O número ${checkThisNumber} não pertence a sequência de Fibonacci`);
        break;
    } else {

    }
}

//Nesse aqui não entendi se era pra codar ou não.
//3) Descubra a lógica e complete o próximo elemento:
/*
        a) 1, 3, 5, 7, /9/

        b) 2, 4, 8, 16, 32, 64, /128/

        c) 0, 1, 4, 9, 16, 25, 36, /49/

        d) 4, 16, 36, 64, /100/

        e) 1, 1, 2, 3, 5, 8, /13/

        f) 2, 10, 12, 16, 17, 18, 19, /21/
*/


//4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. 
//O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h 
//e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. 
//Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

/*  

    

        IMPORTANTE:

        a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

        b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

        c) Explique como chegou no resultado.

        RESPOSTA:

            Os dois estarão a mesma distância da cidade pois estão na mesma posição.
*/


//5) Escreva um programa que inverta os caracteres de um string.

/*

    IMPORTANTE:

    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

    b) Evite usar funções prontas, como, por exemplo, reverse;

*/

let letras = "palavra";
let temp1 = [];
let letrasNew;

for (i = letras.length-1; i >= 0; i--) {
   temp1[i] = letras[i];
   
}
letrasNew = temp1.toString();

console.log(letrasNew.replaceAll(',',''));
