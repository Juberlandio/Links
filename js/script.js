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
    
    // FORÇAR O TEMA CLARO COMO PADRÃO INICIAL:
    if (savedTheme) {
        // Se houver tema salvo (o usuário clicou antes), aplique-o
        applyTheme(savedTheme === 'dark');
    } else {
        // Se não houver tema salvo, aplique SEMPRE o tema claro (isDark = false)
        applyTheme(false); 
    }

    // 2. Adicionar o evento de clique ao botão
    toggleButton.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark-mode');
        
        // Atualiza o ícone e salva a preferência
        if (isDark) {
            toggleButton.querySelector('i').className = 'ri-sun-line';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.querySelector('i').className = 'ri-moon-line';
            localStorage.setItem('theme', 'light');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".soundButton");
    
    // É uma boa prática redefinir o tempo para permitir cliques rápidos
    var audio = new Audio('assets/sons/click-sound.mp3'); 
    audio.volume = 0.4;

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            audio.play();
            audio.currentTime = 0; // Adicionado para permitir repetição imediata
        });
    });
});