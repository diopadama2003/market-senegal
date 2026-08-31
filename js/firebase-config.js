const firebaseConfig = {
  apiKey: "AIzaSyBBCyFm3RGRYJ1pmsRUGcnMdD0vVnWl3Ng",
  authDomain: "market-senegal-21722.firebaseapp.com",
  projectId: "market-senegal-21722",
  storageBucket: "market-senegal-21722.firebasestorage.app",
  messagingSenderId: "1032929937475",
  appId: "1:1032929937475:web:a71bfe95c0eb423b7fecf6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();