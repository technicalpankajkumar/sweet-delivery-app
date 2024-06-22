// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrVmj4Re4oTxwDd2NFX-SxD_s583JDLbY",
  authDomain: "nsh-delivery-app.firebaseapp.com",
  projectId: "nsh-delivery-app",
  storageBucket: "nsh-delivery-app.appspot.com",
  messagingSenderId: "410007350018",
  appId: "1:410007350018:web:a232d9dc2ab7829228b01b",
  measurementId: "G-LY7YGKW3FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const analytics = getAnalytics(app);
// export const auth = getAuth(app)
