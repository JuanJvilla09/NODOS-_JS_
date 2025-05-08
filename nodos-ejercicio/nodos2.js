// 4
const listaOl = document.querySelector("ol");

const nuevaLista = document.createElement("ul");

nuevaLista.classList.add("listado");

listaOl.querySelectorAll("li").forEach(item => {
    nuevaLista.appendChild(item);
});

listaOl.replaceWith(nuevaLista);

//5

const lista_ol = document.querySelector("ol");

const nuevaListaul = document.createElement("ul");
nuevaLista.classList.add("listado"); 

listaOl.querySelectorAll("li").forEach(item => {
    if (item.textContent.trim() !== "Preparar almuerzo") {
        nuevaLista.appendChild(item);
    }
});

listaOl.replaceWith(nuevaLista);

const titulo = document.querySelector("h2");
titulo.classList.add("listado");

//6

const listaOl_ = document.querySelector("ol");

const nuevaLista_ = document.createElement("ul");
nuevaLista.classList.add("listado");

listaOl.querySelectorAll("li").forEach(item => {
    if (item.textContent.trim() !== "Preparar almuerzo") {
        nuevaLista.appendChild(item);
    }
});

listaOl.replaceWith(nuevaLista);

document.querySelector("h2").classList.add("listado");

const liItems = nuevaLista.querySelectorAll("li");
let mercadoItem = Array.from(liItems).find(li => li.textContent.trim() === "Hacer el mercado");

const nuevoItem = document.createElement("li");
nuevoItem.textContent = "Recoger a los niños";

if (mercadoItem && mercadoItem.nextSibling) {
    mercadoItem.parentNode.insertBefore(nuevoItem, mercadoItem.nextSibling);
} else {
    nuevaLista.appendChild(nuevoItem); 
}

nuevaLista.querySelectorAll("li").forEach(li => {
    const texto = li.textContent.trim().toLowerCase();
    if (["desayunar", "preparar almuerzo", "recoger a los niños"].includes(texto)) {
        li.classList.add("cumplido");
    } else if (texto === "ir al banco") {
        li.classList.add("fallido");
    }
});