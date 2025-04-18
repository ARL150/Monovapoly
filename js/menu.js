    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Función para abrir/cerrar el menú
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
