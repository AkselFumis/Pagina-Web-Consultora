document.getElementById('pageSwitch').addEventListener('change', function () {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    if (this.checked) {
        page1.style.display = 'none';
        page2.style.display = 'block';
    } else {
        page1.style.display = 'block';
        page2.style.display = 'none';
    }
})
// Selecciona el switch y el contenedor
const switchInput = document.getElementById('pageSwitch');
const container = document.querySelector('.container');

// Añade un evento para cuando el switch cambie
switchInput.addEventListener('change', () => {
    container.classList.toggle('active', switchInput.checked);
});;