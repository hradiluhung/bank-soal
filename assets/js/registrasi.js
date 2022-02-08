// PASSWORD CONFIRMATION VALIDATION
function validatePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Password tidak sama!");
  } else {
    confirmPassword.setCustomValidity("");
  }
}