import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXoCvUiXhCLbX_bWqtvoNBnRDP0n7KfmA",
    authDomain: "office-aprenda.firebaseapp.com",
    projectId: "office-aprenda",
    storageBucket: "office-aprenda.appspot.com",
    messagingSenderId: "635788453275",
    appId: "1:635788453275:web:e05efefedc4097b022ad3e",
    measurementId: "G-XS339P2HLY"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirecionamento ao clicar no botão "Entrar"
document.getElementById("btnEntrar").addEventListener("click", function () {
    window.location.href = "login/perfil/perfil.html";
});

// Função para Login via Google
function onGoogleSignIn(response) {
    console.log("Login bem-sucedido!", response);
    const credential = response.credential;
    const decodedToken = parseJwt(credential);
    console.log("Usuário:", decodedToken);
    alert(`Bem-vindo, ${decodedToken.name}!`);
}

// Login com Email e Senha
const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Usuário logado:", userCredential.user);
        alert("Login bem-sucedido!");
        window.location.href = "perfil/perfil.html";
    } catch (error) {
        console.error("Erro no login:", error.message);
        alert("Erro no login: " + error.message);
    }
};

// Registro de Novo Usuário
function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuário registrado com sucesso:", userCredential.user);
            alert("Usuário registrado com sucesso!");
            window.location.href = "perfil/perfil.html";
        })
        .catch((error) => {
            console.error("Erro de registro:", error.message);
            alert("Erro ao registrar: " + error.message);
        });
}

// Captura evento de envio do formulário para login ou registro
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (event.submitter.id === "btnRegistrar") {
        registerUser();
    } else {
        loginWithEmail(email, password);
    }
});
