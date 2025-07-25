
/* 





Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

//1 .- Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];
console.log(listaGenerica);

// 2.- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
console.log(lenguajesDeProgramacion);

//3.-  Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
console.log(lenguajesDeProgramacion);

//4.- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function viewLista(){

console.log(lenguajesDeProgramacion);
}

viewLista();

//5.- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function viewLista(){

console.log(lenguajesDeProgramacion);
lenguajesDeProgramacion.reverse();
console.log(lenguajesDeProgramacion);
}

//6.- Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio() {


  let total=0, res, numDatos, item;


  numDatos = arguments.length;


  for (item = 0; item < numDatos; item++)


    {


     total += arguments[item];


    }


  res = total/numDatos;

console.log(res);
  return res;


 }

 promedio(8,9,10,7,9,9);
