function addUser()
{
user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location="Kwitter_room.html";

}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      
}