/*
    * descripcion: Programa ejercicio 1
    * deasrrollador: Jhonny Leon
    * fecha: 24.04.21
    * cambios: ninguno

    Ejercicio1.- Escribir un programa donde nos de la bien venida y nos indique en que navegador estamos
    ejecutando.(10Pts)

    VALIDACION:
    * dar una bienvenida


*/

function detectarNavegador() {
    let userAgent = navigator.userAgent;
    let navegador;

    switch(true) {
        case userAgent.includes('Firefox'):
            navegador = 'Firefox';
            break;
        case userAgent.includes('Chrome') && !userAgent.includes('Edge') && !userAgent.includes('Edg'):
            navegador = 'Chrome';
            break;
        case userAgent.includes('Safari') && !userAgent.includes('Chrome') && !userAgent.includes('Edge') && !userAgent.includes('Edg'):
            navegador = 'Safari';
            break;
        case userAgent.includes('Edge') || userAgent.includes('Edg'):
            navegador = 'Edge';
            break;
        case userAgent.includes('Opera') || userAgent.includes('OPR'):
            navegador = 'Opera';
            break;
        case userAgent.includes('Brave'):
            navegador = 'Brave';
            break;
        case userAgent.includes('MSIE') || userAgent.includes('Trident/'):
            navegador = 'Internet Explorer';
            break;
        default:
            navegador = 'Navegador desconocido';
            break;
    }

    return navegador;
}

// Obtener el nombre del navegador
let nombreNavegador = detectarNavegador();
console.log(`Bienvenido! Estás ejecutando el programa en el navegador ${nombreNavegador}.`);
