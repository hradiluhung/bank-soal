//LUPA SANDI
let lupaSandiContainer = document.getElementById("lupa-sandi-container");
const form = document.getElementById("lupa-sandi-form");
const verifikasiTerkirim = document.getElementById("verfikasi-terkirim");
let countSec = 1;

form.addEventListener("submit", e => {
  e.preventDefault();
  lupaSandiContainer.style.display = "none";
  verifikasiTerkirim.style.display = "block";
  setInterval(() => {
    if (countSec > 0) {
      countSec--;
    } else {
      window.location.href = "index.html"
    }
  }, 1000);
});