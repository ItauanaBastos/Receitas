
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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
const db = getFirestore(app);

// Selecionando os elementos do DOM
const usuario = document.querySelector('#usuario');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const confirmSenha = document.querySelector('#confirmSenha');
const msgError = document.querySelector('#msgError');
const msgSuccess = document.querySelector('#msgSuccess');

// Função de cadastro
async function cadastrar() {
    if (senha.value !== confirmSenha.value) {
        msgError.innerText = "As senhas não coincidem.";
        msgError.style.display = 'block';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, senha.value);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            usuarioCad: usuario.value,
            emailCad: email.value
        });

        msgSuccess.innerText = "Usuário cadastrado com sucesso!";
        msgSuccess.style.display = 'block';
        msgError.style.display = 'none';

        setTimeout(() => {
            window.location.href = '../html/signin.html';
        }, 2000);
    } catch (error) {
        msgError.innerText = `Erro: ${error.message}`;
        msgError.style.display = 'block';
        msgSuccess.style.display = 'none';
    }
}

// Adiciona o evento ao botão de cadastro
document.querySelector('button').addEventListener('click', cadastrar);