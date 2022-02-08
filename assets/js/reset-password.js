//RESET PASSWORD CONFIRMATION VALIDATION
function validatePassword() {
  const newPass = document.getElementById("new-pass");
  const newConfirmPassword = document.getElementById("new-pass-confirm");
  
  if (newPass.value != newConfirmPassword.value) {
    newConfirmPassword.setCustomValidity("Password tidak sama!");
  } else {
    newConfirmPassword.setCustomValidity("");
  }
}

//notification after submit button
const resetSandiContainer = document.getElementsByClassName("reset-sandi-container")[0];
const form = document.getElementById("reset-sandi-form");
const verifikasiTerkirim = document.getElementById("verfikasi-terkirim");
let countSec = 1;

form.addEventListener("submit", e => {
  e.preventDefault();
  resetSandiContainer.style.display = "none";
  verifikasiTerkirim.style.display = "block";
  setInterval(() => {
    if (countSec > 0) {
      countSec--;
    } else {
      window.location.href = "index.html"
    }
  }, 1000);
});