/*
descripcion: ejemplo variables con intervalos
deasrrollador: Jhonny Leon
fecha: 25.04.15
cambios: ninguno
*/
const intervalo=10;
//console.log("intervalo sera de "+ intervalo+" minutos con una constante");
//intervalo=15; //si descomentamos esto nos saldra un error al querer cambiar la constante de intervalo = 10, y querer cambiarlo a 15 ya que una costante no se puede cambiar

/*
//ahora declarar el intervalo como var y querer cambiarlo se puede ya que estaba como 15 y despues de cambio a 20
var Intervalo=15;
console.log("intervalo sera de "+ Intervalo+" minutos con una variable");
Intervalo=20;
console.log("intervalo sera de "+ Intervalo+" minutos con una variable modifiicado");

*/

/*
let varb = true; //bolleano
let varn= 3.142592; //numerico
let vars = "texto string"; //cadenas
let var1; //indefinida

console.log("para la variable varb= " +varb+ " con el tipo de dato= "+typeof varb);
console.log("para la variable varn= " +varn+ " con el tipo de dato= "+typeof varn);
console.log("para la variable vars= " +vars+ " con el tipo de dato= "+typeof vars);
console.log("para la variable varb1= " +var1+ " con el tipo de dato= "+typeof var1);

var1 = vars;
console.log("para la variable varb1= " +var1+ " con el tipo de dato= "+typeof var1);
*/

let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let varx;
/*
varx=var1;
console.log("para la variable varb1= " +varx+ " con el tipo de dato= "+typeof varx);
varx=var2;
console.log("para la variable varb1= " +varx+ " con el tipo de dato= "+typeof varx);
varx=var3
console.log("para la variable varb1= " +varx+ " con el tipo de dato= "+typeof varx);
varx=var4
console.log("para la variable varb1= " +varx+ " con el tipo de dato= "+typeof varx);
*/
//conversiones explicitas
varx=var1+var2;//dentro de las explicitas
console.log("para la variable varb1= " +varx+ " con el tipo de dato= "+typeof varx);
var3=Boolean(var2)+var3; //fuera de las explicitas
console.log("para la variable varb1= " +var3+ " con el tipo de dato= "+typeof var3);
varx=var1+Number(var4); //buscar una funcion
console.log("para la variable varb1= " +varx+ " con el tipo de dato= "+typeof varx);
