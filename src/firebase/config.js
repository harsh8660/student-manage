

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import 'firebase/firestore'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBp5TUpbnKd3ci9trux0oRyBpG6IWIF99A",
    authDomain: "myapp-c5786.firebaseapp.com",
    projectId: "myapp-c5786",
    storageBucket: "myapp-c5786.appspot.com",
    messagingSenderId: "1054016890586",
    appId: "1:1054016890586:web:6bf22d8d0e2574f73d67e3",
    measurementId: "G-5PZHBBYRJG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const firestore=app.firestore()
export default {app,firestore }