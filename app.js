/**
 * 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?
 */

// Variavais let, const, var

const INDICE = 13;
let SOMA = 0;
let K = 0;

// Loop
// enquanto k e menor que indice
// K seja incrementado por 1
// Soma seja incrementatdo pelo valor de SOMA + k;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Resultado de SOMA E: ", SOMA);

alert("Hello Mundo");
