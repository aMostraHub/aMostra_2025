function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        
    }
}

// Definindo a data-alvo para 25 de Agosto de 2025, às 08:00
const targetDate = new Date("August 25, 2025 08:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calcula os dias, horas, minutos e segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Exibe os valores no HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Se a contagem regressiva acabar, exibe uma mensagem
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Chegou a data!";
    }
}, 1000);

