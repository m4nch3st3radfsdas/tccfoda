<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBXoCvUiXhCLbX_bWqtvoNBnRDP0n7KfmA",
    authDomain: "office-aprenda.firebaseapp.com",
    projectId: "office-aprenda",
    storageBucket: "office-aprenda.firebasestorage.app",
    messagingSenderId: "635788453275",
    appId: "1:635788453275:web:e05efefedc4097b022ad3e",
    measurementId: "G-XS339P2HLY"
  };

  // Inicializar o Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);

  // Verificar o estado de autenticação do usuário
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // O usuário está logado
      document.getElementById('profile-image').src = user.photoURL || 'https://img.freepik.com/premium-photo/rainy-cityscape-sunset-anime-girl-working-desk_889006-572.jpg';  // Foto do perfil
      document.querySelector('.profile-info h2').textContent = `Bem-vindo, ${user.displayName || 'Usuário'}`;  // Nome do usuário
      document.querySelector('.profile-info p').textContent = `E-mail: ${user.email}`;  // E-mail do usuário
    } else {
      // O usuário não está logado
      alert('Por favor, faça login para acessar seu perfil');
      window.location.href = "login.html"; // Redireciona para a página de login
    }
  });
</script>
