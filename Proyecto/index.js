const btn = document.getElementById("iniciar");
const age = document.getElementById("age");

btn.addEventListener("click", function () {
  if (+age.value) {
    window.location.href = "./paso1/index.html";
  } else {
    Swal.fire({
      title: "Error!",
      text: "Vuelve cuando seas mayor",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
});
