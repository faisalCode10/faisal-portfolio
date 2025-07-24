// firebase/firebase.js

// Import the functions you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAFnotiZvEaR0OX_C64ykiDGGOiY-56ySw",
  authDomain: "myworkapp-834e3.firebaseapp.com",
  projectId: "myworkapp-834e3",
  storageBucket: "myworkapp-834e3.appspot.com",
  messagingSenderId: "1086539852375",
  appId: "1:1086539852375:web:ca12add73191b096f75112",
  measurementId: "G-5QDVE2DXWK"
};

// Prevent re-initialization during hot reloads
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Only initialize analytics in browser (not server-side)
let analytics = null;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
