// Inicializa el slider usando Slick Carousel
$(document).ready(function () {
    $('.slider').slick({
        dots: true, // Muestra los puntos de navegación
        arrows: true, // Muestra las flechas de navegación
        autoplay: true, // Reproduce automáticamente el slider
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false, // Oculta las flechas en dispositivos más pequeños
                }
            }
        ]
    });
});
