let mayor = 0;
let saldos = [120000, 95000, 150000, 80000, 200000];

for (let i = 0; i < saldos.length; i++) {
  if (mayor <= saldos[i]){
    mayor = saldos[i]
  }
}

console.log("El mayor valor de ventas es :" + mayor );