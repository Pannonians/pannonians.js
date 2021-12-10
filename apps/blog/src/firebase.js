// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzsc_f6ILwMoAZmhBd0gIgm3_r8XkR-2o",
  authDomain: "pannonians-blog.firebaseapp.com",
  projectId: "pannonians-blog",
  storageBucket: "pannonians-blog.appspot.com",
  messagingSenderId: "1001060730143",
  appId: "1:1001060730143:web:4e727f0d995272ce969c2a",
  measurementId: "G-8E7QNMP4TR",
};

// This is a singleton.
// https://en.wikipedia.org/wiki/Singleton_pattern
const Firebase = (function () {
  let instance;

  function createInstance() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const db = getFirestore(app);

    
    return {
      app,
      analytics,
      auth,
      db,
      signInWithPopup,
      logEvent
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    
    },
  };
})();
console.log(Firebase)
export default Firebase;
