// Obtener el modal de Email
var emailModal = document.getElementById("emailModal");
// Obtener el enlace que abre el modal de Email
var emailBtn = document.querySelector(".empresa a");
// Obtener el elemento <span> que cierra el modal de Email
var emailSpan = emailModal.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el enlace de Email, se abre el modal
emailBtn.onclick = function (e) {
    e.preventDefault(); // Evitar la acción predeterminada de abrir el enlace
    emailModal.classList.add('open');
    emailModal.style.display = "flex"; // Mostrar el modal
}

// Cuando el usuario haga clic en <span> (x) del modal de Email, se cierra
emailSpan.onclick = function () {
    emailModal.classList.remove('open');
    emailModal.style.display = "none";
}

// Obtener el modal de CV
var cvModal = document.getElementById("cvModal");
// Obtener el enlace que abre el modal de CV
var cvBtn = document.querySelector(".persona a");
// Obtener el elemento <span> que cierra el modal de CV
var cvSpan = cvModal.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el enlace de CV, se abre el modal
cvBtn.onclick = function (e) {
    e.preventDefault(); // Evitar la acción predeterminada de abrir el enlace
    cvModal.classList.add('open');
    cvModal.style.display = "flex"; // Mostrar el modal
}

// Cuando el usuario haga clic en <span> (x) del modal de CV, se cierra
cvSpan.onclick = function () {
    cvModal.classList.remove('open');
    cvModal.style.display = "none";
}

// Cuando el usuario haga clic fuera de cualquiera de los modales, también se cierra
window.onclick = function (event) {
    if (event.target === emailModal) {
        emailModal.classList.remove('open');
        emailModal.style.display = "none";
    } else if (event.target === cvModal) {
        cvModal.classList.remove('open');
        cvModal.style.display = "none";
    }
}