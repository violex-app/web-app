
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtx1NFIjrdivF7PcTA3tjb5aA_GqoZEhI",
    authDomain: "violex-app.firebaseapp.com",
    projectId: "violex-app",
    storageBucket: "violex-app.appspot.com",
    messagingSenderId: "1082464376576",
    appId: "1:1082464376576:web:7d30df3c66357b411145e5"
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
}

// Auth
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };