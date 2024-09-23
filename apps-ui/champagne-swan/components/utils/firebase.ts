// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDBgAfHXZW2K03QXlxFR4elGOEamMl1UxM',
    authDomain: 'molitio-auth-5466f.firebaseapp.com',
    projectId: 'molitio-auth-5466f',
    storageBucket: 'molitio-auth-5466f.appspot.com',
    messagingSenderId: '352550996605',
    appId: '1:352550996605:web:7d98887cc58ac6c7edbf14',
    measurementId: 'G-8KHVQ5QFQ1',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const analytics = typeof window !== 'undefined' ? getAnalytics(firebaseApp) : undefined;

const initializeFirebase = () => {
    return { firebaseApp, analytics };
};

export { initializeFirebase };
