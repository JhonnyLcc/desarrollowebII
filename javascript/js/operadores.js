let a=10;
let b=5;
a+=1;
console.log(a);

a=a+b;
console.log("a+b:"+a);
a=11;

a+=b;
console.log("a+=b:" +a);

a++;
console.log("a++: "+a)

a--;
console.log("a-- "+a)


if (a%2==0)
        console.log("a es par")
    else
        console.log("a es impar")
console.log(a+b+Number("5"))




console.log("EJERCICIO RANDOMICO")
// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar un array de 10 elementos 
let estudiantes = [
    { nombre: 'Juan', nota: 0 },
    { nombre: 'Pedro', nota: 0 },
    { nombre: 'María', nota: 0 },
    { nombre: 'Ramiro', nota: 0 },
    { nombre: 'Johan', nota: 0 },
    { nombre: 'Carlos', nota: 0 },
    { nombre: 'Fabian', nota: 0 },
    { nombre: 'Miguel', nota: 0 },
    { nombre: 'José', nota: 0 },
    { nombre: 'Lopez', nota: 0 }
];

// Asignar notas aleatorias a cada estudiante
for (let estudiante of estudiantes) {
    estudiante.nota = getRandomNumber(20, 100);
}

// Calcular la nota mayor, menor y el promedio
let notas = estudiantes.map(estudiante => estudiante.nota);
let notaMayor = Math.max(...notas);
let notaMenor = Math.min(...notas);
let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;

// Mostrar resultados
console.log("Array de estudiantes:", estudiantes);
console.log("Nota mayor:", notaMayor);
console.log("Nota menor:", notaMenor);
console.log("Promedio:", promedio.toFixed(2));

