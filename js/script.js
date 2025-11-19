document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    function applyTheme(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark-mode');
            // MUDANÇA AQUI: de 'ph ph-sun' para 'ri-sun-line'
            toggleButton.querySelector('i').className = 'ri-sun-line'; 
        } else {
            htmlElement.classList.remove('dark-mode');
            // MUDANÇA AQUI: de 'ph ph-moon' para 'ri-moon-line'
            toggleButton.querySelector('i').className = 'ri-moon-line'; 
        }
    }

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        // Se não houver tema salvo, define o tema inicial como claro
        applyTheme(false); 
    }

    toggleButton.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark-mode');
        
        if (isDark) {
            // MUDANÇA AQUI: de 'ph ph-sun' para 'ri-sun-line'
            toggleButton.querySelector('i').className = 'ri-sun-line';
            localStorage.setItem('theme', 'dark');
        } else {
            // MUDANÇA AQUI: de 'ph ph-moon' para 'ri-moon-line'
            toggleButton.querySelector('i').className = 'ri-moon-line';
            localStorage.setItem('theme', 'light');
        }
    });
});
// ... o resto do seu código JavaScript continua ...

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".soundButton");
    var audio = new Audio('assets/sons/click-sound.mp3'); 
    audio.volume = 0.4;

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            audio.play();
            audio.currentTime = 0; 
        });
    });
});

const shareButton = document.getElementById('share-button');

if (shareButton) {
    shareButton.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'BERLANTEC Links', 
                text: 'Acesse todos os links oficiais da BERLANTEC em um só lugar!',
                url: window.location.href
            })
            .then(() => console.log('Link compartilhado com sucesso!'))
            .catch((error) => console.log('Erro ao compartilhar:', error));
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('O compartilhamento nativo não é suportado. O link foi copiado para a área de transferência!');
            }).catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
        }
    });
}