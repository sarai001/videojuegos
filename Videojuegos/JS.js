// Obtener el audio
const audioCatalogo = document.getElementById('audioCatalogo');

// Escuchar cuando el usuario entra en la sección del catálogo
const catalogoSection = document.getElementById('catalogo');

// Reproducir la música cuando se haga scroll a la sección
window.addEventListener('scroll', function () {
  // Verificar si la sección del catálogo está visible en la pantalla
  const rect = catalogoSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Si está visible, reproducir la música
    if (audioCatalogo.paused) {
      audioCatalogo.play();
    }
  } else {
    // Si no está visible, pausar la música
    if (!audioCatalogo.paused) {
      audioCatalogo.pause();
    }
  }
});
