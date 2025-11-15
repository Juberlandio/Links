document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    // Função para aplicar o tema
    function applyTheme(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark-mode');
            toggleButton.querySelector('i').className = 'ri-sun-line'; // Ícone de sol para voltar ao modo claro
        } else {
            htmlElement.classList.remove('dark-mode');
            toggleButton.querySelector('i').className = 'ri-moon-line'; // Ícone de lua para ir ao modo escuro
        }
    }

    // 1. Verificar a preferência do usuário no armazenamento local (localStorage)
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // Se houver tema salvo, aplique-o
        applyTheme(savedTheme === 'dark');
    } else {
        // Se não houver tema salvo, use a preferência do sistema
        applyTheme(prefersDark);
    }

    // 2. Adicionar o evento de clique ao botão
    toggleButton.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark-mode');
        
        // Atualiza o ícone
        if (isDark) {
            toggleButton.querySelector('i').className = 'ri-sun-line';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.querySelector('i').className = 'ri-moon-line';
            localStorage.setItem('theme', 'light');
        }
    });
});