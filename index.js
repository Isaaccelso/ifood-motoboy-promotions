document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há notificação push armazenada na localStorage
    const pushNotification = localStorage.getItem('pushNotification');

    if (pushNotification) {
        const data = JSON.parse(pushNotification);
        displayNotification(data.message);
    }
});

// Função para exibir a notificação na página principal
function displayNotification(message) {
    const offerElement = document.getElementById('offer');
    offerElement.textContent = message;
}
