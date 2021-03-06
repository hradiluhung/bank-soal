//EDIT PROFILE
let umumSide = document.getElementById("umum-side");
let keamananSide = document.getElementById("keamanan-side");
let umumTopSm = document.getElementById("umum-top-sm");
let keamananTopSm = document.getElementById("keamanan-top-sm");
let umum = document.getElementById("umum");
let keamanan = document.getElementById("keamanan");

function showUmum() {
  umumSide.classList.add("active");
  keamananSide.classList.remove("active");

  umumTopSm.classList.add("active-sm");
  keamananTopSm.classList.remove("active-sm");

  umum.style.display = "block";
  keamanan.style.display = "none";
}

function showKeamanan() {
  keamananSide.classList.add("active");
  umumSide.classList.remove("active");

  keamananTopSm.classList.add("active-sm");
  umumTopSm.classList.remove("active-sm");

  keamanan.style.display = "block";
  umum.style.display = "none";
}

function closeModal() {
  dropdownProfile.style.display = "none";
  dropdownIsOpen = false;
  
  overlay.classList.toggle("overlayStyle");
}

// NEW PASSWORD CONFIRMATION VALIDATION
function validatePassword() {
  const newPassword = document.getElementById("new-password");
  const newConfirmPassword = document.getElementById("new-password-confirm");

  if (newPassword.value != newConfirmPassword.value) {
    newConfirmPassword.setCustomValidity("Password tidak sama!");
  } else {
    newConfirmPassword.setCustomValidity("");
  }
}