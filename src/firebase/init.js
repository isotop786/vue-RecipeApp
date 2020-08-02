import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDR9KWZHfJ_wZtLyIboTGUn-OrmxD4aq9E",
    authDomain: "smoothie-recipe-4a13c.firebaseapp.com",
    databaseURL: "https://smoothie-recipe-4a13c.firebaseio.com",
    projectId: "smoothie-recipe-4a13c",
    storageBucket: "smoothie-recipe-4a13c.appspot.com",
    messagingSenderId: "793133160249",
    appId: "1:793133160249:web:7b13c161fdb5a4b41e7ae8",
    measurementId: "G-V09TPNBS9H"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export default firebaseApp.firestore()