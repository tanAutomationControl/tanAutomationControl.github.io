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
var PWM = 0;
function rangeSlider (value){
  PWM = document.getElementById('rangeValue').innerHTML
  =value;
}
function rangeSlider2 (value){
  document.getElementById('rangeValue2').innerHTML
  =value;
  firebase.database().ref().child('PWM2').set(65-Number(value));
}
    
function btn (){
    firebase.database().ref().child('PWM').set(-Number(PWM));
    setTimeout(firebase.database().ref().child('PWM').set(0),2000);
    console.log("btn1");
}

function btn2 (){
    firebase.database().ref().child('PWM2').set(72);
    console.log("btn2");
  }
function btn5 (){
    firebase.database().ref().child('PWM').set(Number(PWM));
    console.log("btn3");
  }
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('btn4');
  btn3.addEventListener('touchstart', function(e){
    console.log("start1");
    firebase.database().ref().child('PWM').set(Number(PWM));

  });
  btn3.addEventListener('touchend', function(e){
    console.log("end1");
    firebase.database().ref().child('PWM').set(0);
  });
  btn4.addEventListener('touchstart', function(e){
    console.log("start2");
    firebase.database().ref().child('PWM').set(Number(PWM));
  });
  btn4.addEventListener('touchend', function(e){
    console.log("end2");
    firebase.database().ref().child('PWM').set(0);
  });