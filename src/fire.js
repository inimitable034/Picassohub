import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyC3JZRyd6eE3CtrQFmDJbVMo1hN2owAb4Q",
    authDomain: "picassohub-96509.firebaseapp.com",
    projectId: "picassohub-96509",
    storageBucket: "picassohub-96509.appspot.com",
    messagingSenderId: "128580023632",
    appId: "1:128580023632:web:4783f42cd790ef2783e855"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;