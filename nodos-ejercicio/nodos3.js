// Seleccionamos todos los <p> con clase "ps"
const parrafosPs = document.querySelectorAll("p.ps");

// Recorremos y aplicamos estilos
parrafosPs.forEach(p => {
    p.style.color = "orange";         // Cambiar color del texto
    p.style.fontSize = "18px";      // Cambiar tamaño de letra
});