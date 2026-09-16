//importar dayjs
import dayjs from "dayjs";


//boton referenciado por id
const boton = document.getElementById("añadir");

//constante referenciada por id del input
const input = document.getElementById("texto");

//constante referenciada por el id de la lista
const lista = document.getElementById("lista");

//Poner el boton a la espera de ser clickado
boton.addEventListener("click", guardarPlan);//no poner parentesis en la funcion porque si no le ejecutaria en el momento

//funcion que guarda lo que se haya añadido tras hacer click
function guardarPlan() {
    //conseguir la fecha actual gracias a dayjs
    const fechaHoy = dayjs().format("DD/MM/YYYY HH:mm")
    //creamos un li cada vez que se llame a la funcion
    const li = document.createElement("li")
    //rellena el li con lo que se introduce en el input mas la fecha de hoy
    li.textContent = input.value + " " + fechaHoy;
    //introduce los li creados en la lista creada
    lista.appendChild(li);
    //borrar lo escrito en lo que se añade
    input.value = "";
}
