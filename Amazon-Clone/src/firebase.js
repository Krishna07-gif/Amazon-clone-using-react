import firebase from "firebase"
import 'firebase/database';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCYEaESggTOkU_uouHIyaz8c2IvYtvJk0o",
  authDomain: "clone-using-react-5c561.firebaseapp.com",
  projectId: "clone-using-react-5c561",
  storageBucket: "clone-using-react-5c561.appspot.com",
  messagingSenderId: "301799167686",
  appId: "1:301799167686:web:1c0722189e67de3b7829c7",
  measurementId: "G-XX4D1EMK7E"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };  
