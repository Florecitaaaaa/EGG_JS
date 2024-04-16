let totalAPagar = 0;
let totalProductos = Number(prompt("¿Cuántoa productos diferentes desea llevar?"));

for (let i = 1; 
    i <= totalProductos;
     i= i+1) {
    let nombre =prompt("¿Qué producto desea llevar?");
    let cantidad = Number(prompt("¿Cuántas unidades?"));
    let precio = Number(prompt("¿Cuánto sale cada unidad?"));
    let subtotal = cantidad * precio;
    totalAPagar = totalAPagar + subtotal;
    console.log("Has llevado " + cantidad + " unidades de " + nombre + " por " + precio + " soles.")
}

console.log("Total a pagar: " + totalAPagar + " soles.")

