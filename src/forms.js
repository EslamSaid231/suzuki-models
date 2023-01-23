import BasicExample from "./App";

let message = document.querySelector(".msg");

function validateForm() {
  let email = document.form["Form"]["email"].value;
  let pass = document.form["Form"]["passw"].value;
  if (email.length == 0) {
    message = "Please enter your email";
    return false;
  }
  if (pass < 8) {
    message = "Incorrect password";
    return false;
  } else {
    return true;
  }
}
export default validateForm();
//Message = document.querySelector('.message')
//function validateForm() {
//let username = document.forms["loginForm"]["user"].value
//let password = document.forms["loginForm"]["password"].value
//if (username.length == 0) {
//alert ("Name must be filled out")
//return false
//}
//if ( password.length< 8) {
//alert("Password length should be more than 8 characters")
//return false

//}
//else { return true }

//}

//function reset()
