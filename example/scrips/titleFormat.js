function titleFormat(text) {
    if (text === "") {
        return "Invalid input"; /* si la cadena está vacia devolver el mensaje error */
    } else {
        let firstLetter = text.charAt(0).toUpperCase(); //obtener la primera letra y convertirla en mayuscula
        let restOfTitle = text.slice(1).toLowerCase(); //obtener las demás letras y convertirlas en miniscula
        let formattedTitle = firstLetter + restOfTitle; //comvinar las funciones anteriores
        return formattedTitle;
    }
}

console.log(titleFormat("feliz aniversario mi amorcito pecioso ")); // Salida: 4
console.log(titleFormat("")); // Salida: "Invalid input"
