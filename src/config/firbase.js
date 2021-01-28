import firebase from 'firebase'

const firebaseConfig = {
     apiKey: "AIzaSyDbIDk6qltIfaNK4vQK-UZUfZds33YmjQk",
     authDomain: "fir-89bc3.firebaseapp.com",
     projectId: "fir-89bc3",
     databaseURL: "https://amazon.firebaseio.com",
     storageBucket: "fir-89bc3.appspot.com",
     messagingSenderId: "830002973907",
     appId: "1:830002973907:web:ff112db00e29926f751826",
     measurementId: "G-ELXC7KP75G"
   };

   const firebaseApp=firebase.initializeApp(firebaseConfig);

   const db=firebaseApp.firestore();
   const auth=firebase.auth();

   export {db,auth};