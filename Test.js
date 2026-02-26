const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    // 1. Check current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch to Light
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        // Switch to Dark
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});