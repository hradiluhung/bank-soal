let header = document.getElementById("header");
let overlay = document.getElementById("overlay");
let dropdownProfile = document.getElementById("dropdown-profile");
let dropdownIsOpen = false;

function toggleDropdown() {
  if(dropdownIsOpen == false){
    dropdownProfile.style.display = "block";
    dropdownIsOpen = true;
  }else{
    dropdownProfile.style.display = "none";
    dropdownIsOpen = false;
  }
  
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 8) {
    header.style.zIndex = 9;
  }
}






