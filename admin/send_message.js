document.getElementById('pushForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('pushMessage').value;

    // Enviar a mensagem para a página principal via Push Notification
    if (message.trim() !== '') {
        const data = {
            message: message.trim()
        };
        
        // Simulação do envio da notificação push
        simulatePush(data);

        // Limpar o campo após o envio
        document.getElementById('pushMessage').value = '';
    } else {
        alert('Por favor, insira uma mensagem antes de enviar.');
    }
});

// Função para simular o envio da notificação push
function simulatePush(data) {
    // Envia a mensagem como JSON
    const message = JSON.stringify(data);

    // Armazena a mensagem na localStorage (simulando recebimento da notificação push)
    localStorage.setItem('pushNotification', message);
}
