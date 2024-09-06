// JavaScript para manejar la transición suave al hacer clic en la imagen
document.querySelectorAll('.flex-item a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = url;
        }, 500); // Tiempo de espera para la animación (0.5s)
    });
});

// Muestra un mensaje en la consola del navegador al cargar la página
console.log('Este mensaje viene de un archivo JavaScript externo.');

// Función para cambiar el texto de un párrafo
function cambiarTexto() {
    document.getElementById('parrafo').innerText = '¡Texto cambiado por JavaScript externo!';
}

// Asigna la función cambiarTexto al evento onclick del párrafo
document.getElementById('parrafo').onclick = cambiarTexto;

