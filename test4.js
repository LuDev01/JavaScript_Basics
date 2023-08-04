//----------------------------------------------------BUCLE FOR----------------------------------------------------
//NOTA: El ejercicio #4 de esta parte no está completamente funcional.

//-----------------------------------------------------------------------------------------------------------------


// 1.	Utiliza un bucle for para contar desde 1 hasta un número dado capturado con un prompt.
// let num=parseInt(prompt("Ingresa el número en el que finalziará el conteo: "))

// for(let i=1;i<=num;i++){
//     console.log("Conteo: ",i);
// }

//-----------------------------------------------------------------------------------------------------------------

// 2.	Imprime un patrón de números triangulares
// 1
// 1 2
// 1 2 3

// for(let i=1;i<=3;i++){
//     let r="";
//     for(let j=1;j<=i;j++){
//          r+=j+" ";
// }
// console.log(r);
// }
//-----------------------------------------------------------------------------------------------------------------

// 3.	Categoriza los números de un arreglo en un rango como positivos, negativos o cero.
// let numeros=[-1,-2,-4,-7,0,8,3,9,12,0];
// let positivos="";
// let negativos="";
// let ceros="";

// for(let i=0;i<numeros.length;i++){
//     if(numeros[i]<0){
//         negativos+=numeros[i]+" ";
//     }
//     else if(numeros[i]>0){
//       positivos+=numeros[i]+" ";
//     }
//     else{
//         ceros+=numeros[i]+" ";
//     }
// }
// console.log("Los numeros negativos del arreglo son: ",negativos)
// console.log("Los numeros positivos del arreglo son: ",positivos)
// console.log("Los ceros del arreglo son: ",ceros)
//-----------------------------------------------------------------------------------------------------------------

// 4.	Verifica si una palabra es un palíndromo (se lee igual de izquierda a derecha y viceversa).
// Ejemplo: reconocer
// let palabra = prompt("Ingresa una palabra: ");

// for(let i=0;i<palabra.length/2;i++){
//     if(palabra[i]===palabra.length/2){
//         console.log("La palabra"+palabra+ " es palindromo")
//     }
//     else{
//         console.log("La palabra no es palindromo")
//     }
// }

//-----------------------------------------------------------------------------------------------------------------

// 5.	Busca y muestra la posición de un carácter específico en una cadena.
// let cadena="Luisa Carolina Toro Moreno";
// let caracter=prompt("Ingresa el caracter el cual quieres saber la posición: ");

// for(i=0;i<cadena.length;i++){
//     if(caracter===cadena[i]){
//         console.log("El caracter "+caracter+" está en la posicion "+i);
//     }
// }