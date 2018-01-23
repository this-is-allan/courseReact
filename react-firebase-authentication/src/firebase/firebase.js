import * as firebase from 'firebase';

var prodConfig = {
    apiKey: "AIzaSyAOna02qveF0r-YeO2CIbDZC1l_Y01aOC4",
    authDomain: "react-firebase-authentic-46b68.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-46b68.firebaseio.com",
    projectId: "react-firebase-authentic-46b68",
    storageBucket: "react-firebase-authentic-46b68.appspot.com",
    messagingSenderId: "223755669595"
};

var devConfig = {
    apiKey: "AIzaSyAOna02qveF0r-YeO2CIbDZC1l_Y01aOC4",
    authDomain: "react-firebase-authentic-46b68.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-46b68.firebaseio.com",
    projectId: "react-firebase-authentic-46b68",
    storageBucket: "react-firebase-authentic-46b68.appspot.com",
    messagingSenderId: "223755669595"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
}