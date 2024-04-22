/*
    Ejercicio2.- Escribir un programa donde nos solicite un usuario y contraseña, validar la contraseña con 
    “D153n0W3b2” y el usuario debería ser cualquiera de los siguientes nombres: juan, pedro, maria, raul.
    (20Pts)

    VALIDACION:
    * Se solicita al usuario un nombre de usuario y una contraseña.
    * Se valida que el nombre de usuario sea uno de los siguientes nombres: juan, pedro, maria, raul.
    * Se valida que la contraseña sea "D153n0W3b2".
    * Si ambos datos son correctos, se muestra un mensaje de "Acceso concedido", de lo contrario se muestra un mensaje de "Usuario o contraseña incorrectos".
    


    * descripcion: Programa ejercicio 4
    * deasrrollador: Jhonny Leon
    * fecha: 24.04.21
    * cambios: ninguno
*/




// Función para validar el usuario
function validarUsuario() {
    // Definir nombres permitidos y contraseña correcta
    let nombresPermitidos = ['juan', 'pedro', 'maria', 'raul'];
    let contraseñaCorrecta = 'D153n0W3b2';

    // Verificar si estamos en un entorno de navegador o en Node.js
    if (typeof window !== 'undefined' && window.prompt) {
        // Estamos en un navegador
        let usuario = prompt("Ingrese su nombre de usuario:");
        let contraseña = prompt("Ingrese su contraseña:");

        // Validar usuario y contraseña
        if (nombresPermitidos.includes(usuario.toLowerCase()) && contraseña === contraseñaCorrecta) {
            alert("Acceso concedido");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } else {
        // Estamos en Node.js
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Ingrese su nombre de usuario: ', (usuario) => {
            rl.question('Ingrese su contraseña: ', (contraseña) => {
                // Validar usuario y contraseña
                if (nombresPermitidos.includes(usuario.toLowerCase()) && contraseña === contraseñaCorrecta) {
                    console.log("Acceso concedido");
                } else {
                    console.log("Usuario o contraseña incorrectos");
                }
                rl.close();
            });
        });
    }
}

// Ejecutar la función para iniciar la validación
validarUsuario();