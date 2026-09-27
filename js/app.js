const banner = document.getElementById('cookieBanner');
const btn = document.getElementById('acceptCookie');

// Проверяем, есть ли запись в памяти
if (!localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'flex';
}

// По клику прячем и записываем в память
btn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
});