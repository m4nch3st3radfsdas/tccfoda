import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";

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
const db = getFirestore(app);

// Função para mostrar os dados do perfil
function loadUserProfile() {
    const user = auth.currentUser;
    if (user) {
        // Exibir os dados do usuário
        document.getElementById("userName").textContent = user.displayName || "Nome não disponível";
        document.getElementById("userEmail").innerHTML = `Email: ${user.email}`;
        document.getElementById("profileImage").src = user.photoURL || "https://img.freepik.com/premium-photo/rainy-cityscape-sunset-anime-girl-working-desk_889006-572.jpg"; // Foto de perfil, se disponível
        
        // Carregar dados do progresso do usuário (exemplo de como você pode usar o Firestore)
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef).then(docSnap => {
            if (docSnap.exists()) {
                const userData = docSnap.data();
                document.getElementById("userProgress").textContent = `Progresso: ${userData.progresso || 0}%`;
            } else {
                console.log("Documento não encontrado");
            }
        });
    } else {
        // Redirecionar para a página de login caso o usuário não esteja logado
        window.location.href = "login.html";
    }
}

// Função para realizar logout
document.getElementById("btnLogout").addEventListener("click", () => {
    signOut(auth).then(() => {
        // Redireciona para a página de login após o logout
        window.location.href = "login.html";
    }).catch((error) => {
        console.log("Erro ao sair:", error.message);
    });
});

// Carregar o perfil assim que a página for carregada
window.onload = loadUserProfile;
