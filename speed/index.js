//function calcularVelocidad(distancia, tiempo) {
// const distancia = 10;
// const tiempo = 2;
//const velocidad = distancia / tiempo;
//console.log("La velocidad del móvil es " + velocidad);
//}

//calcularVelocidad(10,2);
//calcularVelocidad(100,2);
//calcularVelocidad(75,3);

const calcularVelocidad = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  console.log("La velocidad del móvil es " + velocidad);
  return velocidad;
};

const velocidad1 = calcularVelocidad(10, 2);
console.log("La velocidad de Juana es " + velocidad1);
