<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - Meu Site</title>
    <script type="module">
      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
      import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

      // Configuração do Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyBXoCvUiXhCLbX_bWqtvoNBnRDP0n7KfmA",
        authDomain: "office-aprenda.firebaseapp.com",
        projectId: "office-aprenda",
        storageBucket: "office-aprenda.firebasestorage.app",
        messagingSenderId: "635788453275",
        appId: "1:635788453275:web:e05efefedc4097b022ad3e",
        measurementId: "G-XS339P2HLY"
      };

      // Inicializando o Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const analytics = getAnalytics(app);

      // Função para registrar o usuário
      function registerUser() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
          alert("Por favor, preencha todos os campos.");
          return;
        }

        // Usando Firebase Authentication para criar o usuário
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            var user = userCredential.user;
            console.log("Usuário registrado com sucesso:", user);
            alert("Usuário registrado com sucesso!");

            // Redirecionar para a página de login
            window.location.href = "perfil/perfil.html"; // redireciona para a página de login
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Erro ao registrar:", errorCode, errorMessage);
            alert("Erro ao registrar: " + errorMessage);
          });
      }

      // Captura o evento de envio do formulário de registro
      document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();  // Impede o envio padrão do formulário
        registerUser();  // Chama a função de registro
      });
    </script>
</head>
<body>
    <div class="container">
        <h1>Registre-se</h1>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="seu@email.com" required>
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" placeholder="•••••••••" required>
            </div>
            <button type="submit" class="btn">Registrar</button>
        </form>
    </div>
</body>
</html>
