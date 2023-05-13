const btn = document.getElementById("iniciar");
const age = document.getElementById("age");

btn.addEventListener("click", function () {
  if (+age.value) {
    window.location.href = "../Paso 2/index.html";
  } else {
    Swal.fire({
      title: "Error!",
      text: "Vuelve cuando seas mayor",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
});
const abrir = document.getElementById("abrir-seccion")

abrir.addEventListener("click", function () {
 
    window.location.href = "../Paso 5/index.html";
  
});
