/*
let carrito = [
    "leche",1,
    "carne",2,
    "papa",3,
    "fideos",1,]

console.log("item: "+carrito[0]);
console.log("cantidad: "+carrito[1]);
console.log("item: "+carrito[2]);
console.log("cantidad: "+carrito[3]);
console.log("item: "+carrito[4]);
console.log("cantidad: "+carrito[5]);
console.log("item: "+carrito[6]);
console.log("cantidad: "+carrito[7]);

carrito.push("arroz", 2);
console.log("impresion completa")
console.log(carrito)

*/



/*
let item  = {name: 'leche', cantidad:1};
console.log("item: "+item.cantidad);
console.log('cantidad: '+item.cantidad)

let carrito=[{name: 'leche', cantidad:1},
            {name: 'carne', cantidad:2},
            {name: 'fideo', cantidad:1},
            {name: 'papa', cantidad:3}];

    
console.log("carrito original");


// Imprimir elementos del arreglo carrito con etiquetas
console.log("Elementos del carrito:");
carrito.forEach(item => {
    console.log("Item: " + item.name);
    console.log("Cantidad: " + item.cantidad);
});

// Imprimir el arreglo carrito actualizado
console.log("Carrito actualizado:");
carrito.forEach(item => {
    console.log("Item: " + item.name);
    console.log("Cantidad: " + item.cantidad);
});


// Agregar un nuevo registro al arreglo carrito
let nuevoItem = { name: 'soda', cantidad: 5};
//nuevo item por si acaso
let nuevoItem2 = { name: 'agua', cantidad: 6};
carrito.push(nuevoItem, nuevoItem2);

console.log(carrito);   


*/

// Definir el arreglo carrito con objetos que contienen artículo, cantidad y precio
let carrito = [
    { name: 'leche', cantidad: 1, precio: 1.5 },
    { name: 'carne', cantidad: 2, precio: 3.25 },
    { name: 'fideo', cantidad: 1, precio: 0.75 },
    { name: 'papa', cantidad: 3, precio: 0.5 }
];

// Imprimir elementos del carrito con etiquetas
console.log("Elementos del carrito:");
carrito.forEach(item => {
    console.log("Item: " + item.name);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio: bs. " + item.precio.toFixed(2)); // Redondear el precio a 2 decimales
    let total = item.cantidad * item.precio;
    console.log("Total: bs. " + total.toFixed(2)); // Imprimir el total del artículo
    console.log("--------------------------------------");
});

//SOLO 4 ARRAY
console.log(carrito);


//NUEVO ITEM
//+1 ARRAY

// Agregar un nuevo registro al arreglo carrito
let nuevoItem = { name: 'arroz', cantidad: 2, precio: 1.2 };
carrito.push(nuevoItem);
// Imprimir el arreglo carrito actualizado
console.log("Carrito actualizado:");
carrito.forEach(item => {
    console.log("Item: " + item.name);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio: bs. " + item.precio.toFixed(2));
    let total = item.cantidad * item.precio;
    console.log("Total: bs." + total.toFixed(2));
    console.log("--------------------------------------");
});



console.log(carrito);