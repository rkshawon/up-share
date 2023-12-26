// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD42PVT1YzRyUZce18d2DLXIxlw7C4QiIQ",
  authDomain: "upshare-fc2c3.firebaseapp.com",
  projectId: "upshare-fc2c3",
  storageBucket: "upshare-fc2c3.appspot.com",
  messagingSenderId: "63963342672",
  appId: "1:63963342672:web:2ba7962ff4dab1f95dae55",
  measurementId: "G-PPYR3FLXZX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmFwaWQtYnVmZmFsby01Mi5jbGVyay5hY2NvdW50cy5kZXYk
// CLERK_SECRET_KEY=sk_test_GpFjoakYse3FVrn9MFpp4gtZpm9TqqqS1MPdt4AUEj

// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
// NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
// NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
