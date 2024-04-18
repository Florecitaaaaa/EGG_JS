function lengthOf(text) {
    if (text === "") {
        return "Invalid input";
    } else {
        return text.length;
    }
}

console.log(lengthOf("Hola")); // Salida: 4
console.log(lengthOf("")); // Salida: "Invalid input"
