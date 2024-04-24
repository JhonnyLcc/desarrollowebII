/*
    * descripcion: Programa ejercicio 4
    * deasrrollador: Jhonny Leon
    * fecha: 24.04.21
    * cambios: ninguno

    * Ejercicio4.- Escribe un programa que pida una frase y escriba:(30Pts)
    • Cuantas veces aparece la letra “o”. Ejemplo Hola → 1
    • Las vocales que aparecen. Ejemplo Hola → 2
    • Cuántas veces aparecen cada una de las vocales.Ejemplo Hola → o:1 , a:1
 
    VALIDACION:
    * Se solicita al usuario que ingrese una frase.
    * Se cuentan las veces que aparece la letra 'o' en la frase.
    * Se obtienen las vocales que aparecen en la frase.
    * Se cuentan las veces que aparece cada vocal en la frase.
    * 
    
 */

    // Verificar si estamos en un entorno de navegador o Node.js
let readline;
if (typeof window === 'undefined') {
    // Entorno Node.js
    readline = require('readline');
}

// Función para contar la cantidad de veces que aparece una letra en una frase
function contarLetra(frase, letra) {
    return frase.toLowerCase().split(letra).length - 1;
}

// Función para obtener las vocales que aparecen en una frase
function obtenerVocales(frase) {
    return frase.toLowerCase().match(/[aeiou]/g);
}

// Función para contar la cantidad de veces que aparece cada vocal en una frase
function contarVocales(frase) {
    let vocales = obtenerVocales(frase);
    let contador = {};
    vocales.forEach(vocal => {
        contador[vocal] = (contador[vocal] || 0) + 1;
    });
    return contador;
}

// Función principal para analizar la frase ingresada por el usuario
function analizarFrase() {
    let frase;
    if (typeof window !== 'undefined') {
        // Entorno de navegador
        frase = prompt("Ingrese una frase:");
    } else {
        // Entorno Node.js
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('Ingrese una frase: ', (respuesta) => {
            frase = respuesta;
            rl.close();

            // Contar la cantidad de veces que aparece la letra 'o' en la frase
            let cantidadLetraO = contarLetra(frase, 'o');
            console.log(`La letra 'o' aparece ${cantidadLetraO} veces en la frase.`);

            // Obtener las vocales que aparecen en la frase
            let vocales = obtenerVocales(frase);
            console.log(`Las vocales que aparecen en la frase son: ${vocales.join(', ')}`);

            // Contar la cantidad de veces que aparece cada vocal en la frase
            let contadorVocales = contarVocales(frase);
            for (let vocal in contadorVocales) {
                console.log(`La vocal ${vocal} aparece ${contadorVocales[vocal]} veces.`);
            }
        });
    }

    if (typeof frase !== 'undefined') {
        // Contar la cantidad de veces que aparece la letra 'o' en la frase
        let cantidadLetraO = contarLetra(frase, 'o');
        console.log(`La letra 'o' aparece ${cantidadLetraO} veces en la frase.`);

        // Obtener las vocales que aparecen en la frase
        let vocales = obtenerVocales(frase);
        console.log(`Las vocales que aparecen en la frase son: ${vocales.join(', ')}`);

        // Contar la cantidad de veces que aparece cada vocal en la frase
        let contadorVocales = contarVocales(frase);
        for (let vocal in contadorVocales) {
            console.log(`La vocal ${vocal} aparece ${contadorVocales[vocal]} veces.`);
        }
    }
}

// Llamada a la función principal para ejecutar el análisis de la frase
analizarFrase();
