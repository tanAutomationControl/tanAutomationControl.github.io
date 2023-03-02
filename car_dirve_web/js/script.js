var firebaseConfig = {
    apiKey: "AIzaSyBCmk3r6cdX7yZACmcGQyNR7vp9P2Wu0qM",
    authDomain: "testputgethtml.firebaseapp.com",
    databaseURL: "https://testputgethtml-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testputgethtml",
    storageBucket: "testputgethtml.appspot.com",
    messagingSenderId: "1027337300110",
    appId: "1:1027337300110:web:91743d365245cc062541df",
    measurementId: "G-M6KM6V14CD"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function rangeSlider (value){
  document.getElementById('rangeValue').innerHTML
  =value;
  console.log(value);
  firebase.database().ref().child('PWM').set(Number(value));
}