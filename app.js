document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('saludo');

    if (boton) {
        boton.addEventListener('click', function () {
            const hora = new Date().getHours();
            let saludo = '¡Hola!';

            if (hora < 12) saludo = 'Buenos días ☀️';
            else if (hora < 19) saludo = 'Buenas tardes 🌤️';
            else saludo = 'Buenas noches 🌙';

            alert(`${saludo} Bienvenido a nuestra Landing Page colaborativa 🎉`);
        });
    }
});