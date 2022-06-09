
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyANPVvYXk-DaDx-m4pLYDA5Cucl_Ekmt-s",
      authDomain: "kwitter-ea80e.firebaseapp.com",
      databaseURL: "https://kwitter-ea80e-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea80e",
      storageBucket: "kwitter-ea80e.appspot.com",
      messagingSenderId: "517729538105",
      appId: "1:517729538105:web:56df611d5cb3b1e0417de8",
      measurementId: "G-MM4PMRYY0B"
    };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name")
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   function addRoom()
   {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "Adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      

      //End code
      });});}
getData();
function redirectToRoomName(name) 
{ console.log(name); 
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"; }
  function logout()
  { localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
    window.location = "index.html"; }
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
         document.getElementById("msg").value = "";
    }
