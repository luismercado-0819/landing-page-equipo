document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('saludo');

    if (boton) {
        boton.addEventListener('click', function () {
            alert('¡Gracias por tu interés! Te esperamos en Café Tostado para guardarte una mesa.');
        });
    }
});