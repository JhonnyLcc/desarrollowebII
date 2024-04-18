

// let nombres = ['Juan', 'María', 'Pedro', 'Luis', 'Ana', 'Carlos', 'Laura', 'Diego', 'Sofía', 'Pablo', 'Elena', 'Jorge', 'Lucía', 'Miguel', 'Carmen', 'Manuel', 'Isabel', 'Antonio', 'Raquel', 'Daniel'];
// let apellidos = ['Gómez', 'Rodríguez', 'Fernández', 'González', 'López', 'Martínez', 'Sánchez', 'Pérez', 'García', 'Díaz', 'Torres', 'Ramírez', 'Ruiz', 'Navarro', 'Jiménez', 'Hernández', 'Flores', 'Moreno', 'Álvarez', 'Romero'];

// const NELEMENTOS = 20

// function unir(nombres, apellidos, cantidad) {
//     let nombresCompletos = [];
//     for (let i = 0; i < cantidad; i++) {
//         let nombreCompleto = `${nombres[Math.floor(Math.random() * nombres.length)]} ${apellidos[Math.floor(Math.random() * apellidos.length)]}`;
//         nombresCompletos.push(nombreCompleto);
//     }
//     return nombresCompletos;
// }

// //imprimimos el let nombrescompletos donde ya se han llenado con nombres y apellidos completos
// let nombresCompletos = unir(nombres, apellidos, NELEMENTOS);
// console.log(nombresCompletos);

//------------del ing
const nelementos = 20;
let nombres = ['Juan', 'María', 'Pedro', 'Luis', 'Ana', 'Carlos', 'Laura', 'Diego', 'Sofía', 'Pablo', 'Elena', 'Jorge', 'Lucía', 'Miguel', 'Carmen', 'Manuel', 'Isabel', 'Antonio', 'Raquel', 'Daniel'];
let apellidos = ['Gómez', 'Rodríguez', 'Fernández', 'González', 'López', 'Martínez', 'Sánchez', 'Pérez', 'García', 'Díaz', 'Torres', 'Ramírez', 'Ruiz', 'Navarro', 'Jiménez', 'Hernández', 'Flores', 'Moreno', 'Álvarez', 'Romero'];

let nomape=[];
function generarNomApe(){

    let nomal, apeal;
    for (let i=0; i< nelementos;i++){
        nomal=nombres[Math.floor(Math.random()*nombres.length)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(nomal+ " "+ apeal);
    }
}

function Imprimir(){
    nomape.forEach(persona =>{
        console.log(persona);
    });
}

generarNomApe();
Imprimir();


//de ese ejemplo mejorara la parte
//nomal=nombres[Math.floor(Math.random()*nombres.length)];
//apeal=apellidos[Math.floor(Math.random()*apellidos.length)];

//ya que se ve mal