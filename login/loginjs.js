import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

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

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Função de redefinir senha
function redefinirSenha() {
  const email = document.getElementById("email").value.trim();

  if (email === "") {
    alert("Por favor, informe seu e-mail para redefinir a senha.");
    return;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Formato de e-mail inválido.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("E-mail de redefinição de senha enviado. Verifique sua caixa de entrada.");
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/user-not-found') {
        alert("Este e-mail não está cadastrado.");
      } else {
        console.error("Erro ao enviar e-mail de redefinição:", error.message);
        alert("Erro: " + error.message);
      }
    });
}

// Login sem verificação de e-mail
const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Login bem-sucedido
    console.log("Usuário logado com sucesso:", user);
    alert("Login realizado com sucesso!");
    window.location.href = "perfil/perfil.html"; // Redireciona para a página de perfil

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/user-not-found') {
      alert("Este e-mail não está cadastrado.");
    } else if (errorCode === 'auth/wrong-password') {
      alert("Senha incorreta.");
    } else if (errorCode === 'auth/invalid-email') {
      alert("Formato de e-mail inválido.");
    } else {
      console.error("Erro no login:", errorMessage);
      alert("Erro no login: " + errorMessage);
    }
  }
};

// Captura envio do formulário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (event.submitter.id === "btnRedefinir") {
    redefinirSenha();
  } else {
    loginWithEmail(email, password);
  }
});

window.onSignIn = function (response) {
  console.log("Token de ID do Google:", response.credential);

  // Aqui você pode fazer login com Firebase usando o token, se quiser:
  // Exemplo:
  // const credential = GoogleAuthProvider.credential(response.credential);
  // signInWithCredential(auth, credential).then(...);
};
