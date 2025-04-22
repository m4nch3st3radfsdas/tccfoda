import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);

// Função para registrar o usuário com verificação de e-mail
function registerUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("E-mail inválido. Verifique o formato (ex: nome@dominio.com).");
    return;
  }

  // Definindo idioma para português
  auth.languageCode = 'pt-BR';

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Envia e-mail de verificação
      try {
        await sendEmailVerification(user, {
          url: 'https://office-aprenda.firebaseapp.com/__/auth/action', // Certifique-se que esta URL está correta
          handleCodeInApp: false
        });

        // Cria documento no Firestore com dados básicos do usuário
        await setDoc(doc(db, "usuarios", user.uid), {
          uid: user.uid,
          email: user.email,
          dataRegistro: new Date().toISOString(),
          progresso: {
            wordBasico: 0,
            wordIntermediario: 0,
            wordAvancado: 0,
            excelBasico: 0,
            excelIntermediario: 0,
            excelAvancado: 0,
            powerpointBasico: 0,
            powerpointIntermediario: 0,
            powerpointAvancado: 0
          }
        });

        // Desloga o usuário para forçar verificação antes do login
        await signOut(auth);

        console.log("Usuário registrado com sucesso:", user);
        alert("Usuário registrado com sucesso! Verifique seu e-mail para ativar a conta.");
        window.location.href = "login/login.html";
      } catch (error) {
        console.error("Erro ao enviar o e-mail de verificação:", error.message);
        alert("Erro ao enviar o e-mail de verificação: " + error.message);
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/email-already-in-use') {
        alert("Este e-mail já está em uso. Tente fazer login ou use outro e-mail.");
      } else {
        console.log("Erro ao registrar:", errorCode, errorMessage);
        alert("Erro ao registrar: " + errorMessage);
      }
    });
}

// Captura o evento de envio do formulário de registro
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
  });
});
