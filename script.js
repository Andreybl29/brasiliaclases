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
