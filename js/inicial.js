function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value.trim();

    if (message !== "") {
        addMessage("You", message);
        userInput.value = "";
    }
}

function addMessage(sender, text) {
    const chatContainer = document.getElementById("chatContainer");
    const messageElement = document.createElement("div");

    // Obter o horário atual
    const timestamp = new Date().toLocaleTimeString();

    // Aplicar a classe CSS 'message-you' para o remetente "You"
    const senderClass = sender === "You" ? "message-you" : "";

    messageElement.innerHTML = `<strong class="${senderClass}">${sender}:</strong> ${text} <span class="timestamp">${timestamp}</span>`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Faz o scroll automático para a última mensagem
}

