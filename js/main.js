const formulario = document.querySelector("form");
const mensaje = document.querySelector('[role="status"]');

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
  mensaje.textContent = "¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.";
  formulario.reset();
});