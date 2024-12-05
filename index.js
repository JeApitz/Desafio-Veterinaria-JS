const { registrar, leer } = require("./operaciones");

const args = process.argv.slice(2);

const operacion = args[0];
const nombre = args[1];
const edad = args[2];
const tipo = args[3];
const color = args[4];
const efermedad = args[5];

if (operacion === "registrar") {
  registrar(nombre, edad, tipo, color, efermedad);
}
if (operacion === "leer") {
  leer();
}
