function palindrome(text) {
    // Divide la cadena en un array(lista) de caracteres, invierte el array y luego une los caracteres nuevamente
    let reversedText = text.split('').reverse().join('');
    // Compara la cadena original con la cadena invertida para determinar si es un palíndromo
    return text === reversedText;
}

console.log(palindrome("radar")); // Salida: true
console.log(palindrome("dormir")); // Salida: false
console.log(palindrome("level")); // Salida: true
