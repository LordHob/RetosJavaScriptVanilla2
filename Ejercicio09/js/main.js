// EJERCICIO 9

// Crea un array de números donde le indicamos por prompt el tamaño del array, rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el valor de cada posición y la suma de todos los valores.Tareas a realizar: Haz un método para rellenar el array(que tenga como parámetros los números entre los que tenga que generar) y otro para mostrar el contenido y la suma del array.

let array = [];
let tamaño = prompt("Introduce tamaño del array");
tamaño = parseInt(tamaño);
let suma = 0;

for (let i = 1; i <= tamaño; i++) {
    array.push(parseInt(Math.random() * (10 - 0)));
}

array.forEach(numero => {
    suma = suma + numero;
});

console.log(array);
console.log(suma);