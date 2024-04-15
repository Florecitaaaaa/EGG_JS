const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = "La cantidad de caracteres de tu frase o palabra es " +cantidad;
alert(mensajeCantidad);
const fraseMinuscula = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = (fraseMinuscula +" "+ fraseMayusculas);
alert(minMay);
