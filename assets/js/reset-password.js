//RESET PASSWORD CONFIRMATION VALIDATION
const newPass = document.getElementById("new-pass");
const newConfirmPassword = document.getElementById("new-pass-confirm");

function validatePassword() {
  if (newPass.value != newConfirmPassword.value) {
    newConfirmPassword.setCustomValidity("Password tidak sama!");
  } else {
    newConfirmPassword.setCustomValidity("");
  }
}

newPass.onchange = validatePassword;
newConfirmPassword.onfocus = validatePassword;