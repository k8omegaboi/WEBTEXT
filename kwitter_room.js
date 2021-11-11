
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCRpYecUm-pd-VLKRhv8tRZbhVNhJ21XHs",
      authDomain: "kwitter-1-b3e54.firebaseapp.com",
      databaseURL: "https://kwitter-1-b3e54-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-b3e54",
      storageBucket: "kwitter-1-b3e54.appspot.com",
      messagingSenderId: "791806028665",
      appId: "1:791806028665:web:284bc3aa563a82d00adda8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
function  getData()
      {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "kwitter.html";
      window.location.replace("kwitter.html");
}
function send()
{
      msg = document.getElementById("msg").value
}