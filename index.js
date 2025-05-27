const email = document.querySelector(".email")
const password = document.querySelector(".password");
const button = document.querySelector(".log_btn");

const right_email = "appclick@gmail.com";
const right_password = "1234AppClick";


button.addEventListener("click", function() {

if (right_email !== email || right_password !== password ){
    alert("Login successful");
} else {
    alert("Incorrect email or password");   
}
})