import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAE-wdM_h5RVLyxzslVUmR4yQdPZYgRR2Q",

  // Only needed if using Firebase Realtime Database (which we will be in this example)
  databaseURL: "https://stop-game-4f068.firebaseio.com",

  // Only needed if using Firebase Authentication
  authDomain: "stop-game-4f068.firebaseapp.com",

  // Only needed if using Firebase Storage
  storageBucket: "stop-game-4f068.appspot.com"
};

firebase.initializeApp(config);