/*
    * descripcion: Programa ejercicio 5
    * deasrrollador: Jhonny Leon
    * fecha: 24.04.21
    * cambios: ninguno

    * Ejercicio5.- En base a 2 array de nombres y apellidos, genere un nuevo array combinando de forma 

    aleatoria ambos, formatee los nombres convirtiendo el primer elemento del nombre y apellido en 
    mayúscula y el resto en minúscula .(20Pts)
    
    VALIDACION:
    * Se generan nombres aleatorios combinando nombres y apellidos de dos arrays.
    * Los nombres se formatean convirtiendo la primera letra en mayúscula y el resto en minúscula.
    

 */


// Función para generar nombres aleatorios combinando nombres y apellidos
function generarNombreCompleto(nombres, apellidos) {
    let nombreCompleto = [];

    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];
        let apellido = apellidos[Math.floor(Math.random() * apellidos.length)];

        // Formatear nombre y apellido
        let nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
        let apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

        // Combinar nombre y apellido
        nombreCompleto.push(`${nombreFormateado} ${apellidoFormateado}`);
    }

    return nombreCompleto;
}

// Arrays de nombres y apellidos
let nombres = ["juan", "pedro", "maria"];
let apellidos = ["lopez", "gonzalez", "sanchez"];

// Generar nombres aleatorios y mostrarlos
console
let nombresCompletos = generarNombreCompleto(nombres, apellidos);
console.log(nombresCompletos);
