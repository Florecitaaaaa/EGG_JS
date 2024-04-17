// let totalAPagar = 0;
// let totalProductos = Number(prompt("¿Cuántoa productos diferentes desea llevar?"));

// for (let i = 1; 
//     i <= totalProductos;
//      i= i+1) {
//     let nombre =prompt("¿Qué producto desea llevar?");
//     let cantidad = Number(prompt("¿Cuántas unidades?"));
//     let precio = Number(prompt("¿Cuánto sale cada unidad?"));
//     let subtotal = cantidad * precio;
//     totalAPagar = totalAPagar + subtotal;
//     console.log("Has llevado " + cantidad + " unidades de " + nombre + " por " + precio + " soles.")
// }

// console.log("Total a pagar: " + totalAPagar + " soles.")


const comprar = () => {
  let totalApagar = 0;
  for (let index = 1; index <= 1; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
};

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

alert("El monto total a pagar es "+total);


    