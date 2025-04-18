const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
const closeBtn = document.querySelector('.close-btn');

toggle.addEventListener('click', () => {
    nav.classList.add('active');
    toggle.style.display = 'none'; // Oculta el botón al abrir
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    toggle.style.display = 'flex'; // Muestra el botón al cerrar
});
