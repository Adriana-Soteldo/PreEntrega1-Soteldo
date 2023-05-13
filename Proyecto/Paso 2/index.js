const btn = document.getElementById("form1-next");

btn.addEventListener("click", function () {
  const nombre = document.getElementById("Nombre");
  const apellido = document.getElementById("Apellido");
  const dni = document.getElementById("dni");
  const direccion = document.getElementById("Direccion");
  const telefono = document.getElementById("Telefono");
  const edad = document.getElementById("Edad");

  const usuario = {
    nombre: nombre.value,
    apellido: apellido.value,
    dni: dni.value,
    direccion: direccion.value,
    telefono: telefono.value,
    edad: edad.value,
  };

  window.localStorage.setItem("usuario", JSON.stringify(usuario));

  Swal.fire({
    title: "Bienvenido",
    text: "Continuemos",
    icon: "success",
    confirmButtonText: "Cool",
    didClose: function () {
      window.location.href = "../Paso 3/index.html"; 
    },
  });
});
