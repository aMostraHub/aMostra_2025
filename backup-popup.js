// Crie um arquivo para manter o código do Pop-Up caso queiramos reutilizar o código na versão de 2025 do site.


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
  
