import { 
    PUBLIC_FB_API_KEY,  
    PUBLIC_FB_AUTH_DOMAIN,
    PUBLIC_FB_PROJECT_NAME,
    PUBLIC_FB_STORAGE_BUCKET,
    PUBLIC_FB_MESSAGING_SENDER_ID,
    PUBLIC_FB_APP_ID
} from '$env/static/public';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: PUBLIC_FB_API_KEY,
    authDomain: PUBLIC_FB_AUTH_DOMAIN,
    projectId: PUBLIC_FB_PROJECT_NAME,
    storageBucket: PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FB_MESSAGING_SENDER_ID,
    appId: PUBLIC_FB_APP_ID
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
}

// Auth
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };