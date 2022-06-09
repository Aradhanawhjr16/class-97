//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message_data + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id) 
{ 
console.log("clicked on like button - " + message_id); 
button_id = message_id;
 likes = document.getElementById(button_id).value; 
 updated_likes = Number(likes) + 1;
  console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update
   ({ 
         like : updated_likes 
}); }
function logout()
 { 
       localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("kwitter.html"); }