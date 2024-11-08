let color = prompt("Ingresa un color en español:");

switch (color.toLowerCase()) {
    case "azul":
        console.log("blue");
        break;
    case "rojo":
        console.log("red");
        break;
    case "verde":
        console.log("green");
        break;
    case "naranja":
        console.log("orange");
        break;
    case "amarillo":
        console.log("yellow");
        break;
    default:
        console.log("Color not found");
        break;
}