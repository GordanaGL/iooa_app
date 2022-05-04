import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCTxzFckLtR8YYWfs62GGTRCyP35uWGYUc",
    authDomain: "gastro-city.firebaseapp.com",
    projectId: "gastro-city",
    storageBucket: "gastro-city.appspot.com",
    messagingSenderId: "179254719054",
    appId: "1:179254719054:web:2c8b4ff718fde0dde8c91f"
  };

  /*spajanje na backend init firebase*/
firebase.initializeApp(firebaseConfig)


//init services za komunikaciju s firebase
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}