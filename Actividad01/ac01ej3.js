/*
    * descripcion: Programa ejercicio 3
    * deasrrollador: Jhonny Leon
    * fecha: 24.04.21
    * cambios: ninguno
    
    * Ejercicio3.- Escribir un programa para imprimir N numeros primos generados de forma aleatorio y 
    cargado en un array que sean menores al 110.(20Pts)

    VALIDACION:
    * Se genera un array con N números primos aleatorios menores a 110.
    * La función isPrime() se utiliza para determinar si un número es primo.
    * La función generarNumerosPrimos() genera los números primos y los almacena en un array.
    * La cantidad de números primos a generar se define en la variable cantidadNumerosPrimos.
    
 */

function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generarNumerosPrimos() {
    let numerosPrimos = [];
    let cantidadNumerosPrimos = 10; // Cantidad de números primos a generar

    while (numerosPrimos.length < cantidadNumerosPrimos) {
        let num = Math.floor(Math.random() * 110);
        if (esPrimo(num)) {
            numerosPrimos.push(num);
        }
    }

    return numerosPrimos;
}

let numerosPrimos = generarNumerosPrimos();
console.log("Números primos generados:", numerosPrimos);
