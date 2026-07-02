let suma = 0;
let saldos = [120000, 95000, 150000, 80000, 200000];

for (let i = 0; i < saldos.length; i++) {
  suma = suma + saldos[i];
}
promedio = suma / saldos.length;
console.log("El promedio de ventas es :" + promedio);