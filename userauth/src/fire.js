import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyB8poSVGdF9Yo1wXScxEMFBbXRbsX7p2FM",
    authDomain: "userauthdemo-f68df.firebaseapp.com",
    databaseURL: "https://userauthdemo-f68df.firebaseio.com",
    projectId: "userauthdemo-f68df",
    storageBucket: "userauthdemo-f68df.appspot.com",
    messagingSenderId: "331858412468",
    appId: "1:331858412468:web:4a7794b3e9b8d2816aa8e1",
    measurementId: "G-KSSRVLJLTS"
  };


  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;