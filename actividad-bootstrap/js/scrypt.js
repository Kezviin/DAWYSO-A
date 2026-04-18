// ==================== MODAL PRODUCTOS ====================
const botonesComprar = document.querySelectorAll(".btn-comprar");
const modalProducto = new bootstrap.Modal(document.getElementById("exampleModal"));

botonesComprar.forEach(function (boton) {
  boton.addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = boton.getAttribute("data-nombre");
    const descripcion = boton.getAttribute("data-descripcion");
    const dpi = boton.getAttribute("data-dpi");
    const hz = boton.getAttribute("data-hz");
    const estado = boton.getAttribute("data-estado");

    const contenido = `
      <h5>${nombre}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Descripción:</strong> ${descripcion}</li>
        <li class="list-group-item"><strong>DPI:</strong> ${dpi}</li>
        <li class="list-group-item"><strong>Hz:</strong> ${hz}</li>
        <li class="list-group-item"><strong>Estado:</strong> ${estado}</li>
      </ul>
    `;

    document.getElementById("modalBody").innerHTML = contenido;
    modalProducto.show();
  });
});


// ==================== MODAL LOGIN ====================
const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));

// Para entrar
const CORREO_VALIDO = "admin@gmail.com";
const PASSWORD_VALIDA = "1234";

const formulario = document.querySelector("#login form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const correoIngresado = document.getElementById("email").value;
  const passwordIngresada = document.getElementById("password").value;

  if (correoIngresado === CORREO_VALIDO && passwordIngresada === PASSWORD_VALIDA) {
    // Datos correctos
    document.getElementById("modalLoginTitulo").textContent = "✅ Acceso Correcto";
    document.getElementById("modalLoginMensaje").textContent = "Datos ingresados correctamente.";
    document.getElementById("modalLoginHeader").className = "modal-header bg-success text-white";
  } else {
    // Datos incorrectos
    document.getElementById("modalLoginTitulo").textContent = "❌ Acceso Denegado";
    document.getElementById("modalLoginMensaje").textContent = "Datos mal diligenciados. Intenta de nuevo.";
    document.getElementById("modalLoginHeader").className = "modal-header bg-danger text-white";
  }

  modalLogin.show();
});