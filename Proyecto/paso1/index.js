const btn = document.getElementById("form1-next");

btn.addEventListener("click", function () {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const dni = document.getElementById("dni");
  const direccion = document.getElementById("direccion");
  const telefono = document.getElementById("telefono");
  const edad = document.getElementById("edad");

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
      window.location.href = "../paso2/index.html"; 
    },
  });
});
