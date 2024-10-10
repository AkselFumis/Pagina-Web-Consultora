document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        adjustNavbarPosition();
    };

    function adjustNavbarPosition() {
        var navbar = document.getElementById('navbar');
        var content = document.querySelector('.content');

        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
            content.style.marginTop = '0px';
        } else {
            navbar.classList.remove('sticky');
            content.style.marginTop = '0';
        }
    }
});
const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");
const dropdownBtn = document.querySelector(".dropdown .dropbtn");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const logo = document.querySelector('.logo');

// Controla el menú hamburguesa
hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    logo.classList.toggle('active');
});

// Controla el dropdown "Servicios" en pantallas pequeñas
dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");

    // Alterna entre mostrar/ocultar el contenido del dropdown
    if (dropdown.classList.contains("active")) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
});