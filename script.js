function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        
    }
}

// Definindo a data-alvo para 30 de setembro de 2024, às 08:00
const targetDate = new Date("September 30, 2024 08:00:00").getTime();

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

// Função para mostrar o popup
function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
    // Armazena o timestamp atual no localStorage
    localStorage.setItem('popupShownTime', Date.now());
  }
  
  // Verifica se o popup já foi mostrado nos últimos 10 minutos
  window.onload = function () {
    const popupShownTime = localStorage.getItem('popupShownTime');
    const currentTime = Date.now();
    const tenMinutes = 10 * 60 * 1000; // 10 minutos em milissegundos
  
    // Se o popup nunca foi mostrado ou se passaram mais de 10 minutos, exibe o popup
    if (!popupShownTime || (currentTime - popupShownTime > tenMinutes)) {
      showPopup();
    }
  };
  
  // Fecha o popup ao clicar no botão "Fechar"
  document.getElementById('close-btn').onclick = function () {
    document.getElementById('popup').classList.add('hidden');
  };
  
  // Redireciona para a página de inscrição ao clicar no botão "Inscrever-se"
  document.getElementById('subscribe-btn').onclick = function () {
    window.location.href = 'https://forms.gle/YrmPUedwpaQtoefx7'; // Substitua com o link correto
  };
  