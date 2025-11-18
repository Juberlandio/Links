document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    function applyTheme(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark-mode');
            toggleButton.querySelector('i').className = 'ph ph-sun'; 
        } else {
            htmlElement.classList.remove('dark-mode');
            toggleButton.querySelector('i').className = 'ph ph-moon'; 
        }
    }

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        applyTheme(false); 
    }

    toggleButton.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark-mode');
        
        if (isDark) {
            toggleButton.querySelector('i').className = 'ph ph-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.querySelector('i').className = 'ph ph-moon';
            localStorage.setItem('theme', 'light');
        }
    });
});

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