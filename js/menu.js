const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
});

document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
        navigation.classList.remove('active');
    }
});

