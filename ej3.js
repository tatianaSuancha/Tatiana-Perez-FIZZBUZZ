let pedido;

for (let i = 1; i <= 20; i++) {
  pedido = i;
  if (pedido % 2 === 0) {
    console.log("Pedido " + pedido + " -> Persona A");
  } else {
    console.log("Pedido " + pedido + " -> Persona B");
  }
}