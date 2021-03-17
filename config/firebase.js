// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase = require("firebase/app");
var firebaseConfig = {
    apiKey: "AIzaSyDS6GYXG5gh_inJDyHwPZo6dDurAPrM0gM",
    authDomain: "mini-project-cea75.firebaseapp.com",
    projectId: "mini-project-cea75",
    storageBucket: "mini-project-cea75.appspot.com",
    messagingSenderId: "857240090130",
    appId: "1:857240090130:web:fd5035af7e7c42d7234acb",
    measurementId: "G-8WRRVCWN67",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;