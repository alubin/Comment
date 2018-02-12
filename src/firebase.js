import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCONShfQI1e3_-ntwW5V00-O9S8dEbJGnk",
    authDomain: "testfirebase-e8666.firebaseapp.com",
    databaseURL: "https://testfirebase-e8666.firebaseio.com",
    projectId: "testfirebase-e8666",
    storageBucket: "",
    messagingSenderId: "884035535973"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;