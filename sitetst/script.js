const professor = document.getElementById("professor");
const messageBox = document.getElementById("message-box");

// Animação ao passar o mouse
professor.addEventListener("mouseenter", () => {
    professor.style.transform = "scale(1.1)";
});

professor.addEventListener("mouseleave", () => {
    professor.style.transform = "scale(1)";
});

// Interação ao clicar
professor.addEventListener("click", () => {
    professor.classList.add("shake");
    showMessage("Olá! Pronto para a aula?");
    setTimeout(() => professor.classList.remove("shake"), 500);
});

// Função para exibir mensagens
function showMessage(text) {
    messageBox.innerText = text;
}


function falar(texto) {
    let speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "pt-BR"; // Configura para falar em português
    window.speechSynthesis.speak(speech);
}

professor.addEventListener("click", () => {
    showMessage("Olá! Eu sou seu professor virtual.");
    falar("Olá! Eu sou seu professor virtual.");
});

document.getElementById("btn-primary").addEventListener("click", function() {
    window.location.href = "tyranoscript-master\tyranoscript-master\index.html"; // Substitua pelo link da página desejada
});
