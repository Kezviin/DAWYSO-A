const btn = document.getElementById("Tarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
        li.remove();
        contadorTareas.textContent = parseInt(contadorTareas.textContent) - 1;
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
    input.value = "";
    contadorTareas.textContent = parseInt(contadorTareas.textContent) + 1;
});