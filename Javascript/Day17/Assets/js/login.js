function login(){

let email = document.getElementById("email").value

let password = document.getElementById("password").value

let user = JSON.parse(localStorage.getItem("user"))

if(email == user.email && password == user.password){

alert("Login Successfully")

window.location.href = "dashboard.html"

}
else{

alert("Invalid email or password")

}

}