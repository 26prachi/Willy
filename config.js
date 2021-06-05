import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDo88hqfNr24b5JwpOg2Fq19AaltTrT3y4",
  authDomain: "wi-li-673d6.firebaseapp.com",
  projectId: "wi-li-673d6",
  storageBucket: "wi-li-673d6.appspot.com",
  messagingSenderId: "497103321282",
  appId: "1:497103321282:web:05d5ef30dfaaaa4563635b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();