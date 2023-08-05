import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDENuRQ7o0oScAe6ozGFCp2SnE2NMilP74",
  authDomain: "pallav-chatgpt-messenger.firebaseapp.com",
  projectId: "pallav-chatgpt-messenger",
  storageBucket: "pallav-chatgpt-messenger.appspot.com",
  messagingSenderId: "864617637891",
  appId: "1:864617637891:web:a834a224af161be7f38636"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };