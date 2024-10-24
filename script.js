document.addEventListener('DOMContentLoaded', function () {
    const mensajeElement = document.getElementById('mensaje');

    // Obtén el mes actual (0 = enero, 11 = diciembre)
    const mesActual = new Date().getMonth();

    // Define los mensajes según el mes
    const mensajesPorMes = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    // Asigna el mensaje correspondiente
    mensajeElement.textContent = mensajesPorMes[mesActual];
});
