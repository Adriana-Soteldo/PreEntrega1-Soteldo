const label = document.getElementById("usuario");
const usuario = JSON.parse(window.localStorage.getItem("usuario"));
label.innerHTML = `${usuario.nombre} ${usuario.apellido}`;

const btn = document.getElementById("form1-next");

btn.addEventListener("click", function () {
  const edad = document.getElementById("cuenta");
  window.localStorage.setItem("tipo-cuenta", edad.value);

  window.location.href = "../paso3/index.html";
});
