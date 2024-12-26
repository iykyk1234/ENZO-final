const firebaseConfig = {
  apiKey: "AIzaSyBZT5RX4Uq_TMGPkTaH3em4Pv1C-vrzMCk",
  authDomain: "neww-e2e8d.firebaseapp.com",
  databaseURL: "https://neww-e2e8d-default-rtdb.firebaseio.com",
  projectId: "neww-e2e8d",
  storageBucket: "neww-e2e8d.firebasestorage.app",
  messagingSenderId: "31070980462",
  appId: "1:31070980462:web:36a807a35d2b811fa3997f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


var Speechrecognition = window.webkitSpeechRecognition;
var recognition = new Speechrecognition();
 

function start_btn(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();

}

recognition.onresult= function(event){
    console.log(event);

    var result =event.results[0][0].transcript;
    console.log(result);


    document.getElementById("Problem").innerHTML = result;
  }

var form=document.getElementById('form')
form.addEventListener('submit',function(event){
  //preventdefalft prevents the form from autosubmitting 
  event.preventDefault()
   problem=document.getElementById("Problem").value;
  id=document.getElementById("Patientsinfo").value;
  console.log(problem,id);
  firebase.database().ref("/").child(id).update({
    requirement:problem,
    purpose:"patients problem"
  })

});
