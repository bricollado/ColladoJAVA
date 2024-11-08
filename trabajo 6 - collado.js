const prompt = require('prompt-sync')();

let a = parseInt(prompt('primer ángulo: '));
let b = parseInt(prompt('Segundo ángulo: '));
let c = parseInt(prompt('Tercer ángulo: '));


let suma = a + b + c;
if ( suma === 180 && a > 0 && b > 0 && c > 0){
    console.log('El triangulo es válido');
} else {
    console.log('El triangulo no es válido');
}