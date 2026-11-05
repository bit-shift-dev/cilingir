const themeToggle = document.getElementById('themeToggle');

const setDarkMode = (isDarkMode) => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.setAttribute('aria-pressed', String(isDarkMode));
    themeToggle.setAttribute('aria-label', isDarkMode ? 'Gündüz modunu aç' : 'Gece modunu aç');
    themeToggle.querySelector('i').className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
};

setDarkMode(localStorage.getItem('darkMode') === 'true');
themeToggle.addEventListener('click', () => {
    const isDarkMode = !document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', String(isDarkMode));
    setDarkMode(isDarkMode);
});
