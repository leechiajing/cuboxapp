let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6JqufpJ8Pov2cRDdpickZPfL19vJO5_s",
    authDomain: "testerproject-a38c1.firebaseapp.com",
    databaseURL: "https://testerproject-a38c1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testerproject-a38c1",
    storageBucket: "testerproject-a38c1.appspot.com",
    messagingSenderId: "84159004429",
    appId: "1:84159004429:web:55377f8de458b3646a3a44",
    measurementId: "G-HRT5PVRWQK"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
const db = getDatabase();
const data1 = ref(db, 'farm');
var farmpit_location = [
  {x:100,y:100},
  {x:100,y:1200},
  {x:400,y:100},
  {x:400,y:1200},
  {x:700,y:100},
  {x:700,y:1200},
];
var back_button =new Image();
var automatic_mode = new Image();
automatic_mode.src = "automatic mode.png";
back_button.src = "click.png";
back_button.onload = function() {ctx.drawImage(back_button, 200, 3720, 600, 300);};
automatic_mode.onload = function(){ctx.drawImage(automatic_mode, 200, 3320, 600, 300);};
var carrot = new Image();
carrot.src = "carrot.png";
var crops = [];
function back(){
canvas.addEventListener('mousemove',(event)=>{
  var mousex = event.offsetX;
  var mousey = event.offsetY;
  canvas.addEventListener('mousedown',(event)=>{
  if(mousex < 800 && mousex > 200 && mousey < 1942 && mousey>1833){
    window.location.href = "index.html";
  }
  if(mousex < 800 && mousex > 200 && mousey < 1753 && mousey>1640){
    window.location.href = "index.html";
  }
  
  //console.log("mousex:"+mousex+"mousey:"+mousey);
});

});}
back();
function farmlocation(){
  farmpit_location.forEach((farm) => {
    var farmpit = new Image();
    farmpit.src = "farmpit.png";
    farmpit.onload = function(){ctx.drawImage(farmpit,farm.x,farm.y, 200,900);};
    farmpit.onload;
});
}
farmlocation();
function rungraph(){
onValue(data1, (snapshot) => {
  
});}

