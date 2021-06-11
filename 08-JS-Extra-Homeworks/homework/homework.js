// No cambies los nombres de las funciones.

// *HECHO
function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}

// ! AUN NO SE BIEN COMO
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj = {};
  for(let i = 0; i < string.length; i++){
    if(!obj.hasOwnProperty(string[i])){
      obj[string[i]] = 1;
    }
    else{
      obj[string[i]] = obj[string[i]] + 1
    }
  }
  
  return obj

}


// *HECHO
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
let mayusculas = "";
let minusculas = "";


for (let index = 0; index < s.length; index++) {
    if(s[index].toUpperCase() !== s[index]){
        minusculas += s[index]
    }

    else if(s[index].toUpperCase() === s[index]){
        mayusculas += s[index]
    }
}

return mayusculas + minusculas;
}


// *HECHO
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let str1 = str
  var strReverse = str1.split('').reverse().join('');
  let arr = strReverse.split(' ').reverse();
  let finalStr = "";

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[arr.length - 1]){
      finalStr = finalStr + arr[i].toString();
    }
    else{
    finalStr = finalStr + arr[i].toString() + " ";
    }
  }
  
return finalStr;

} 

// *HECHO
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let num = numero;
let str = toString(num);
let  arr = toArray(str)

//Convertimos el numero a String
function toString(numeroDado){
  return numeroDado.toString();
}

//Convertir el string a array
function toArray(stringDada){
  let arr1 = []
  for(let i = 0; i < stringDada.length; i++){
      arr1.push(stringDada[i])
  }
  return arr1
}

//Revisamos igualdad de cadenas espejo
function checkNum(arrayDada){
  for( let i = 0; i < arrayDada.length; i++){
    if(arrayDada[i] === arrayDada.reverse()[i]){
      return "Es capicua"
    }
    else{
      return "No es capicua"
    }
  }
}

return checkNum(arr);
}

// *HECHO
function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  function quitarLetras(string){
    let str = "";
    for (let i = 0; i < cadena.length; i++) {
      if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c" ){
        cadena[i + 1];
      }
      else { str += cadena[i] }
    }
    return str;
  }

  return quitarLetras(cadena)
}

// !Buscar mejor manera
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // ?Solucion de asesora
  // const arr2 = [];

  // for(let i = 0; i < arr.length; i++){
  //   if(arr2.length === 0){
  //     arr2.push(arr[i])
  //   }
  //   else{
  //     for(let j = 0; j < arr2.length; j++){
  //       if(arr2[j].length <= arr[i].length){
  //         arr2.push(arr[i]);
  //         break;
  //       }
  //       break;
  //     }
  //   }
  // }

  // return arr2;
  
  // *Mi solución
let arr1Letras = [];
let arr2Letras = [];
let arr3Letras = [];
let arr4Letras = [];
let arr5Letras = [];
let arr6Letras = [];
let arr7Letras = [];
let arr8Letras = [];
let arr9Letras = [];
let arr10Letras = [];

const words = arr;

for( let i = 0; i < words.length; i++){
  if(words[i].length === 1){
     arr1Letras = words.filter(word => word.length === 1);
   }
   else if(words[i].length === 2){
     arr2Letras = words.filter(word => word.length === 2);
   }
   else if(words[i].length === 3){
     arr3Letras = words.filter(word => word.length === 3);
   }
   else if(words[i].length === 4){
     arr4Letras = words.filter(word => word.length === 4);
   }
   else if(words[i].length === 5){
     arr5Letras = words.filter(word => word.length === 5);
   }
   if(words[i].length === 6){
     arr6Letras = words.filter(word => word.length === 6);
   }
   if(words[i].length === 7){
     arr7Letras = words.filter(word => word.length === 7);
   }
   if(words[i].length === 8){
     arr8Letras = words.filter(word => word.length === 8);
   }
   if(words[i].length === 9){
     arr9Letras = words.filter(word => word.length === 9);
   }
   if(words[i].length === 10){
     arr10Letras = words.filter(word => word.length === 10);
   }
}

return arr1Letras.concat(arr2Letras,arr3Letras,arr4Letras,arr5Letras,arr6Letras,arr7Letras,arr8Letras,arr9Letras,arr10Letras)


// !Checar
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let arr1 = arreglo1;
  let arr2 = arreglo2;
  let arr3 = [];
  let arrMayor = MayMen(arr1,arr2);
  
  //Esta función te regresa el array mas grande
  function MayMen(arr1,arr2){
    if(arr1.length >= arr2.length){
    return arr1
  }
  else {return arr2}
  }
  
  //Esta función compara los numeros y los agrega a un nuevo array
  for(let i = 0; i < arrMayor.length; i++){
    if(arr1[i] === arr2[0] || arr1[i] === arr2[1] || arr1[i] === arr2[2] || arr1[i] === arr2[3]){
      arr3.push(arr1[i]);
    }
  }
  
  //Esta función ordena los números de menor a mayor
  let finalArray = (arr3.sort(function (a, b){
    return a - b;
  })) 

return finalArray;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

