const boton = document.querySelector(".agregar-tarea");
const modal = document.querySelector(".modal-tarea");
const cancelar = document.querySelector(".cancelar");

boton.addEventListener("click",() =>{
    modal.classList.add("activo");
})

cancelar.addEventListener("click", () =>{
    modal.classList.remove("activo");
})