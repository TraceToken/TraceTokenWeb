document.addEventListener('DOMContentLoaded', function() {
    const elementosOcultos = document.querySelectorAll('.seccion-principal.oculto, .seccion-larga.oculto');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementosOcultos.forEach((elemento) => {
        observer.observe(elemento);
    });

    // Funcionalidad del botón (sin cambios importantes)
    const miBoton = document.getElementById('miBoton');
    const mensajeDiv = document.getElementById('mensaje');

    if (miBoton && mensajeDiv) {
        miBoton.addEventListener('click', function() {
            mensajeDiv.textContent = '¡Acción realizada!';
        });
    }
});


