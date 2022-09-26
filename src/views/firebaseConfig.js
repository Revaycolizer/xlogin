import firebase from 'firebase/app';
import 'firebase/firestore'

var config = {

  apiKey: "AIzaSyA7K-Updc-YgjpLh2aBe2yV8k3sdQmOgqg",
  authDomain: "techgenius-cdf63.firebaseapp.com",
  projectId: "techgenius-cdf63",
  storageBucket: "techgenius-cdf63.appspot.com",
  messagingSenderId: "250411933820",
  appId: "1:250411933820:web:a40ca8a032c654226de9f9",
  measurementId: "G-DSK36V13T3"

};


firebase.initializeApp(config)
const db = firebase.firestore();

db.settings({timestapsInSnapshots:true});

export default db;



