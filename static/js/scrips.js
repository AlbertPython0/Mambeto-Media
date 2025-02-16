// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 120
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
});

// Параллакс-эффект
window.addEventListener('mousemove', (e) => {
    const particles = document.querySelector('.particles');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.style.transform = `
        translate(${x * 30}px, ${y * 30}px)
    `;
});