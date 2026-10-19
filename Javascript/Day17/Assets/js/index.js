alert("javascript connected")

function register(){

  

let name = document.getElementById("name").value

let email = document.getElementById("email").value

let password = document.getElementById("password").value

let confirmpassword = document.getElementById("confirmpassword").value




if (password !== confirmpassword) {

    alert("password does not match")

    return;
    
}

let user = {

    name:name,
    email:email,
    password:password

    };

    localStorage.setItem("user",JSON.stringify(user));

    alert("Resitration Successfully ")


    window.location.href = "login.html"

}


