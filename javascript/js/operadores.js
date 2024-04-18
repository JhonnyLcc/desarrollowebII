// let a=10;
// let b=5;
// a+=1;
// console.log(a);

// a=a+b;
// console.log("a+b:"+a);
// a=11;

// a+=b;
// console.log("a+=b:" +a);

// a++;
// console.log("a++: "+a)

// a--;
// console.log("a-- "+a)


// if (a%2==0)
//         console.log("a es par")
//     else
//         console.log("a es impar")
// console.log(a+b+Number("5"))




// console.log("EJERCICIO RANDOMICO")
// // Función para generar un número aleatorio entre min y max
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Generar un array de 10 elementos 
// let estudiantes = [
//     { nombre: 'Juan', nota: 0 },
//     { nombre: 'Pedro', nota: 0 },
//     { nombre: 'María', nota: 0 },
//     { nombre: 'Ramiro', nota: 0 },
//     { nombre: 'Johan', nota: 0 },
//     { nombre: 'Carlos', nota: 0 },
//     { nombre: 'Fabian', nota: 0 },
//     { nombre: 'Miguel', nota: 0 },
//     { nombre: 'José', nota: 0 },
//     { nombre: 'Lopez', nota: 0 }
// ];

// // Asignar notas aleatorias a cada estudiante
// for (let estudiante of estudiantes) {
//     estudiante.nota = getRandomNumber(20, 100);
// }

// // Calcular la nota mayor, menor y el promedio
// let notas = estudiantes.map(estudiante => estudiante.nota);
// let notaMayor = Math.max(...notas);
// let notaMenor = Math.min(...notas);
// let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;

// // Mostrar resultados
// console.log("Array de estudiantes:", estudiantes);
// console.log("Nota mayor:", notaMayor);
// console.log("Nota menor:", notaMenor);
// console.log("Promedio:", promedio.toFixed(2));


//ACA DEFINIMOS LOS RANGOS---------------------------------------------------------------
// console.log("RANGOS------------------")
// // Función para generar un número aleatorio entre min y max
// function cargarNotas(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// // Función para obtener el rango de acuerdo a la nota
// function obtenerRango(nota) {
//     let rango;
//     switch(true) {
//         case (nota < 5):
//             rango = 'insuficiente';
//             break;
//         case (nota >= 5 && nota < 6):
//             rango = 'suficiente';
//             break;
//         case (nota >= 6 && nota < 7):
//             rango = 'bien';
//             break;
//         case (nota >= 7 && nota < 9):
//             rango = 'notable';
//             break;
//         case (nota >= 9):
//             rango = 'sobresaliente';
//             break;
//         default:
//             rango = 'fuera de rango';
//             break;
//     }
//     return rango;
// }


// // Generar un array de 10 elementos 
// let estudiantes = [
//     { nombre: 'Juan', nota: 0 },
//     { nombre: 'Pedro', nota: 0 },
//     { nombre: 'María', nota: 0 },
//     { nombre: 'Ramiro', nota: 0 },
//     { nombre: 'Johan', nota: 0 },
//     { nombre: 'Carlos', nota: 0 },
//     { nombre: 'Fabian', nota: 0 },
//     { nombre: 'Miguel', nota: 0 },
//     { nombre: 'José', nota: 0 },
//     { nombre: 'Lopez', nota: 0 }
// ];

// // Asignar notas aleatorias a cada estudiante
// for (let estudiante of estudiantes) {
//     estudiante.nota = cargarNotas(1, 10);
// }
// console.log(estudiantes)

// // Agrupar estudiantes por rango de notas
// let grupos = {};
// for (let estudiante of estudiantes) {
//     let rango = obtenerRango(estudiante.nota);
//     if (!grupos[rango]) {
//         grupos[rango] = [];
//     }
//     grupos[rango].push(estudiante.nombre);
// }

// // Imprimir estudiantes por grupo de manera más concisa
// function impNotas(grupos) {
//     for (let rango in grupos) {
//         let estudiantesEnGrupo = grupos[rango].join(', ');
//         console.log(`Estudiantes en el grupo de ${rango} son: ${estudiantesEnGrupo}`);
//     }
// }

// // Llamada a la función
// impNotas(grupos);

//-------------------------------------------------------------------------

//variables globales
// let nota=[
//     {nombre: 'juan', nota:0},
//     {nombre: 'jose', nota:0},
//     {nombre: 'rene', nota:0},
//     {nombre: 'miguel', nota:0},
//     {nombre: 'albert', nota:0},
//     {nombre: 'johan', nota:0},
//     {nombre: 'jesus', nota:0},
//     {nombre: 'maria', nota:0},

//     function getRandomNumber($max, $min){
//         return Math.floor(Math.random()*($max-$min+1));
//     }
// ];

// function cargarNotas(){
//     notas.forEach(notas=>{
//         nota.nota=getRandomNumber(10,2);
//     })
// }

// console.log("numero random: " +getRandomNumber(10,2));
// function impNotas()
// {
//     notas.forEach(nota=>
//     {
//        let $clasificar;
//        switch (nota.nota){
//         case 2: case 3: case 4:
//             $clasificar = "insuficiente";
//             break;
//         case 5: case 6:
//             $clasificar = "suficiente";
//             break;
//         case 7: case 8:
//             $clasificar ="bien";
//             break;
//         case 9:
//             $clasificar = "notable";
//             break;
//         case 10:
//             $clasificar = "sobresaliente";
//             break;
//             default:
//                 $clasificar = "fuera de rango;"
                
//        }
//        console.log(nota.nombre+" - "+nota.nota+": "+$clasificar+"\n");

//     });
// }

// cargarNotas();
// impNotas();


//-------------------------
