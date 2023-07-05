
//1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("un mensaje")

//2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("Hello World")

//3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

console.log(
    
    3+5)

//4 Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

var usuario= prompt("Ingrese su nombre:")

console.log(`Hola ${usuario}`)

//5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt
let numero1 = parseInt(prompt('ejercicio suma de dos numeros: ingrese el primer numero'))
let numero2 = parseInt(prompt('ejercicio suma de dos numeros: ingrese el segundo numero'))

console.log("El resultado de la suma es: " + (numero1 + numero2))


//6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero3 = parseFloat(prompt("Ejercicio 'cual es el mayor' Ingrese el primer número:"));
let numero4 = parseFloat(prompt("Ejercicio 'cuel es el mayor' Ingrese el segundo número:"));

if (numero3 > numero4) {
  console.log(`${numero3} es mayor`);

} else if (numero4 > numero3) {
  console.log(`${numero4}es mayor`);
} 

//7  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero5 =  parseFloat(prompt("Ejercicio 'el mayor de los tres'Ingrese el primer número:"))
let numero6 =  parseFloat(prompt("Ejercicio 'el mayor de los tres'Ingrese el segundo número:"))
let numero7 =  parseFloat(prompt("Ejercicio 'el mayor de los tres'Ingrese el tercer número:"))

console.log(Math.max(numero5, numero6, numero7))

//8 Escribe un programa que pida un número y diga si es divisible por 2

let numero8 = parseInt(prompt("Ejercicio 'definir la paridad' INGRESE UN NUMERO")) 

let resto8 = numero8 % 2

if(resto8 == 0){
    console.log(`el numero ${numero8} es divisible por 2`)}
else{ console.log(`el numero ${numero8} no edivisible por 2`)}


//9 Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt 

/*let fraseVocales = prompt("ingrese una frase")

 var frase = prompt("Ingrese una frase:");
var vocales = "";
var i = 0;

while (i < frase.length) {
  var caracter = frase.charAt(i).toLowerCase();
  if ("aeiou".includes(caracter)) {
    vocales += caracter + " ";
  }
  i++;
}

document.write("Las vocales que aparecen en la frase son: " + vocales); */


//10 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero9 = parseInt(prompt("ingrese un numero entero" ))

if (numero9 % 2 === 0) {
    console.log("El número es divisible por 2.");
  } else if (numero9 % 3 === 0) {
    console.log("El número es divisible por 3.");
  } else if (numero9 % 5 === 0) {
    console.log("El número es divisible por 5.");
  } else if (numero9 % 7 === 0) {
    console.log("El número es divisible por 7.");
  } 

  //11 Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


  


  if (numero9 % 2 === 0 && numero9 % 3=== 0 && numero9 % 5 ===0 && numero9 % 7=== 0){
    console.log("el numero es divisible por 2, 3, 5 y 7")
  } else if( numero9 % 2 ===0 && numero9 %3=== 0 && numero9 % 5 ===0){
    console.log("el numero es divisible por 2,3y 5")
  }
  else if( numero9 % 2 ===0 && numero9 %3=== 0 && numero9 % 7 ===0){
    console.log("el numero es divisible por 2,3y 7")
  }
  else if( numero9 % 2 ===0 && numero9 %7=== 0 && numero9 % 5 ===0){
    console.log("el numero es divisible por 2,5 y 7")
  }    
  else if( numero9 % 7 ===0 && numero9 %3=== 0 && numero9 % 5 ===0){
    console.log("el numero es divisible por 3,5 y 7")
  }
  else if( numero9 % 2 ===0 && numero9 %3=== 0 ){
    console.log("el numero es divisible por 2 y 3")
  }
  else if( numero9 % 2 ===0 && numero9 % 5=== 0 ){
    console.log("el numero es divisible por 2 y 5")
  }
  else if( numero9 % 2 ===0 && numero9 % 7=== 0 ){
    console.log("el numero es divisible por 2 y 7")
  }
  else if( numero9 % 3 ===0 && numero9 %5=== 0 ){
    console.log("el numero es divisible por 3 y 5")
  }
  else if( numero9 % 3 ===0 && numero9 %7=== 0 ){
    console.log("el numero es divisible por 3 y 7")

  }
  else if( numero9 % 7 ===0 && numero9 %5=== 0 ){
    console.log("el numero es divisible por 5 y 7")
  }
