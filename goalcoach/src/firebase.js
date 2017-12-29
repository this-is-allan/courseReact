import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA780CfpxpR6bQcSnwUukP5L4BXsc1WamM",
    authDomain: "goalcoach-756c8.firebaseapp.com",
    databaseURL: "https://goalcoach-756c8.firebaseio.com",
    projectId: "goalcoach-756c8",
    storageBucket: "",
    messagingSenderId: "322998445000"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');