const contenedor = document.querySelector(".header-tareas")
const modal = document.querySelector(".modal-tarea");

//Boton agregar tarea
const boton = document.querySelector(".agregar-tarea");
boton.addEventListener("click",() =>{
    modal.classList.add("activo");
})

//Boton cancelar
const cancelar = document.querySelector(".cancelar");
cancelar.addEventListener("click", () =>{
    modal.classList.remove("activo");
})

//Boton guardar tarea
const input = document.querySelector(".nombre-tarea");
const guardar = document.querySelector(".guardar");

guardar.addEventListener("click" , () =>{
    const texto = input.value;
    if (texto === "") return 

    let tarea = document.createElement("li");
    tarea.textContent = texto;

    const lista = document.querySelector(".lista-tareas");
    lista.appendChild(tarea);

    input.value = "";

    modal.classList.remove("activo");
})
