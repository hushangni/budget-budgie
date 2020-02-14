
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });

$(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyB9UYWK7PdAbt9ht66WNXMyRL26eKd4DlE",
        authDomain: "budget-budgie.firebaseapp.com",
        databaseURL: "https://budget-budgie.firebaseio.com",
        projectId: "budget-budgie",
        storageBucket: "budget-budgie.appspot.com",
        messagingSenderId: "348663393125",
        appId: "1:348663393125:web:18d2b03215989f1b99cf8c",
        measurementId: "G-7LMZ0QRM86"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
})