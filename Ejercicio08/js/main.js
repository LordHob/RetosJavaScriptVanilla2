// EJERCICIO 8

// Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar valores y otro para mostrar.

let array = [];

for (let i = 1; i <= 10; i++) {
    array.push(prompt("Introduce el número " + i + " del array."));
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i] + " es el valor de la posición " + i + " del array.");
}


