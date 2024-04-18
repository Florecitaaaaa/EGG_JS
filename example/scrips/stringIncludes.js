function stringIncludes(substring, string) {
    return string.includes(substring);
}

console.log(stringIncludes("hello", "hello world")); // Salida: true
console.log(stringIncludes("bye", "hello world")); // Salida: false
