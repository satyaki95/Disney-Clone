import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDztzlNkExqM0nraNA9CjpsdZ5oDX3iKk",
  authDomain: "disneyplus-clone-35665.firebaseapp.com",
  projectId: "disneyplus-clone-35665",
  storageBucket: "disneyplus-clone-35665.appspot.com",
  messagingSenderId: "808651592071",
  appId: "1:808651592071:web:60f6bc7c2c00010e244322",
  measurementId: "G-WKQPXY3KXQ"
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
