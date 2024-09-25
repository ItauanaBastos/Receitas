import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBSPeCOHjCj-nl-GjYCB1exuEIbrZahE",
  authDomain: "receitas-f30ab.firebaseapp.com",
  projectId: "receitas-f30ab",
  storageBucket: "receitas-f30ab.appspot.com",
  messagingSenderId: "617335034773",
  appId: "1:617335034773:web:bfe57b6868c77b99ea9c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Função para mostrar/ocultar a senha
let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');
    
    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

// Função de login
async function entrar() {
    let email = document.querySelector('#email'); // Altere 'usuario' para 'email'
    let senha = document.querySelector('#senha');
    let msgError = document.querySelector('#msgError');
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, senha.value);
        const user = userCredential.user;

        // Redirecionar para a página inicial
        window.location.href = "../html/inicio.html";
        
        // Criar um token aleatório (se necessário)
        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        // Armazenar o token e informações do usuário
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify({ user: user.email }));
        
    } catch (error) {
        // Exibir mensagem de erro
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário ou senha incorretos';
        email.focus();
    }
}

// Adiciona o evento ao botão de login
document.querySelector('button').addEventListener('click', entrar);