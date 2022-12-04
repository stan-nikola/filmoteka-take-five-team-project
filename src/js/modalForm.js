import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO11oR33t-VMPXIdPhVdKy-YV2hVS0eQA",
  authDomain: "authentication-ecaf1.firebaseapp.com",
  databaseURL: "https://authentication-ecaf1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authentication-ecaf1",
  storageBucket: "authentication-ecaf1.appspot.com",
  messagingSenderId: "753823341746",
  appId: "1:753823341746:web:910a9a2a4acbc8f7223dab"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let getEl = selector => document.querySelector(selector);

getEl('.register-btn').addEventListener('click', showLogInModal);


function showLogInModal(e) {
    getEl('.modal-form__backdrop').classList.remove('hidden');
}

getEl('.modal-form__close-button').addEventListener('click', onCloseRegisterForm);

function onCloseRegisterForm(e) {
    e.preventDefault();
    getEl('.modal-form__backdrop').classList.add('hidden');
}

window.addEventListener('keydown', onEscCloseModal);

function onEscCloseModal(e) {
    const ESC_KEY_CODE = 'Escape';
    e.preventDefault();
    if (e.code === ESC_KEY_CODE) {
        getEl('.modal-form__backdrop').classList.add('hidden');
        window.removeEventListener('keydown', onEscCloseModal);
    }
}

getEl('.modal-form__backdrop').addEventListener('click', onBackdropCloseModal);

function onBackdropCloseModal(e) {
    if (e.currentTarget === e.target) {
        getEl('.modal-form__backdrop').classList.add('hidden');
        getEl('.modal-form__backdrop').removeEventListener('click', onBackdropCloseModal);
    }
}

getEl('#register').addEventListener('click', onRegister);

function onRegister(e) {
    e.preventDefault();
    const name = getEl('#username').value;
    const email = getEl('#email').value;
    const password = getEl('#password').value;

    if (name === "" || email === "" || password === "") {
        window.alert("Please write something!");
    } else {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            set(ref(database, 'users/' + user.uid), {
                username: name,
                useremail: email,
            });
            getEl('.modal-form__registration').reset();
            window.alert("Yor profile in base");
        })
        .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert("Oops");
        });
        
    }
}

getEl('#logIn').addEventListener('click', onLogIn);

function onLogIn(e) {
    e.preventDefault();
    const userEmail = getEl('#mail').value;
    const userPassword = getEl('#pasw').value;
    if (userEmail === "" || userPassword === "") {
        window.alert("Please write something!");
    } else {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user !== null) {
                    update(ref(database, 'users/' + user.uid), {
                        last_login: new Date(),
                    });
                    window.alert(`Welcome!`);
                    getEl('.modal-form__login').reset();
            }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert("Oops");
            });
    }
}

export { showLogInModal, onCloseRegisterForm, onEscCloseModal, onBackdropCloseModal, onRegister, onLogIn}