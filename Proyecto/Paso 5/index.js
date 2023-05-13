const btn = document.getElementById("ingresar");

btn.addEventListener("click", function () {
  const dni = document.getElementById("dni").value;
  const usuario = JSON.parse(window.localStorage.getItem("usuario"))

  if (usuario.dni === dni) {

    Swal.fire({
        title: "Bienvenido",
        text: "Continuemos",
        icon: "success",
        confirmButtonText: "Cool",
        didClose: function () {
          window.location.href = "../Paso 6/index.html"; 
        },
      });
  } else {
    
  Swal.fire({
    title: "Error",
    text: "Intentalo de vuelta",
    icon: "error",
    confirmButtonText: "Cool",
  });
  }

});
