document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('saludo');

    if (boton) {
        boton.addEventListener('click', function () {
            alert('¡Hola! Bienvenido a nuestra Landing Page colaborativa 🎉');
        });
    }
});