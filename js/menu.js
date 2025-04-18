    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navigation');
    const closeBtn = document.querySelector('.close-btn');

    toggle.addEventListener('click', () => {
        nav.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
    });


