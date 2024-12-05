const fs = require("fs");

const registrar = (nombre, edad, tipo, color, efermedad) => {
  let citas = [];
  const data = fs.readFileSync("citas.json", "utf8");
  citas = JSON.parse(data);

  const arr = {
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    efermedad: efermedad,
  };

  citas.push(arr);

  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log("cita creada");
};

const leer = () => {
  JSON.parse(fs.readFileSync("citas.json")).forEach((cita) =>
    console.log(cita)
  );
};

module.exports = { registrar, leer };
