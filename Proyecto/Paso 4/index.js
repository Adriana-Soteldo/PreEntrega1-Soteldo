const datosBancarios = {
  sucursal: "018",
  producto: window.localStorage.getItem("tipo-cuenta"),
  cuenta: random(),
};

const cuenta =
  datosBancarios.sucursal +
  "-" +
  datosBancarios.producto +
  "-" +
  datosBancarios.cuenta;

const cuentaLabel = document.getElementById("cuenta");
cuentaLabel.innerHTML = cuenta;

function random() {
  let val = "";

  for (i = 0; i < 5; i++) {
    val += Math.abs(Math.floor(Math.random() * (0 - 9 + 1) + 0));
  }

  return val;
}
const btn = document.getElementById("form1-next");
btn.addEventListener("click", function () {
  const edad = document.getElementById("cerrar-seccion");
 
  window.location.href = "../Paso 1/index.html";
});
