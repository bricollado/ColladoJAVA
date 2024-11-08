const prompt = require('prompt-sync')();

let tempF = parseInt(prompt('Ingrese una temperatura en grados Fahrenheit: '));

function Celsius(){
    return ((tempF - 32) * 5/9).toFixed(2); // para redondear los decimales y mostrar solo 2
}

let tempC = Celsius(tempF);
console.log(`Temperatura en grados Fahrenheit: ${tempF}°F, Temperatura convertida a grados Celsius: ${tempC}°C`)